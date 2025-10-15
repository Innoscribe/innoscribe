import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Simple in-memory rate limiting (for production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRealIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  return 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }
  
  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }
  
  record.count++;
  return { allowed: true, remaining: maxRequests - record.count };
}

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ message: 'Navn og telefonnummer er påkrevd.' }, { status: 400 });
  }

  // Check if phone number has country code
  if (!phone.startsWith('+')) {
    return NextResponse.json({ message: 'Vennligst legg til landkode (f.eks. +47 for Norge).' }, { status: 400 });
  }

  // Rate limiting
  const ip = getRealIP(req);
  const { allowed, remaining } = checkRateLimit(ip);
  
  if (!allowed) {
    return NextResponse.json({ 
      message: 'For mange forespørsler. Du kan bare gjøre 5 anrop per time.' 
    }, { status: 429 });
  }

  try {
    const response = await fetch('https://api.vapi.ai/call', {
      // If your account expects the documented path, swap to:
      // 'https://api.vapi.ai/call/phone'
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.VAPI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assistantId: process.env.VAPI_ASSISTANT_ID,
        phoneNumberId: process.env.VAPI_PHONE_NUMBER_ID,
        customer: {
          number: phone,           // E.164, e.g. +14155551234
          name,                    // optional, but fine to include
        },
        // ✅ This is the key: pass variables here
        assistantOverrides: {
          variableValues: {
            name,                  // will be available as {{name}} in prompts/messages
          },
          // (optional) you can also override the first message here:
          // firstMessage: "Hi {{name}}! This is Erik from Innoscribe. How are you today?"
        },
        // metadata is still useful for logging/CRMs, but NOT for prompt templating
        metadata: {
          customerName: name,
          source: 'website-form',
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Vapi Error:', data);
      return NextResponse.json({ message: 'Kunne ikke starte samtalen. Prøv igjen senere.' }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Samtale startet', 
      remaining,
      data 
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Serverfeil. Prøv igjen senere.' }, { status: 500 });
  }
}
