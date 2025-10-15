import { NextResponse } from 'next/server';

export const runtime = 'nodejs';



export async function POST(req: Request) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ message: 'Navn og telefonnummer er påkrevd.' }, { status: 400 });
  }

  // Check if phone number has country code
  if (!phone.startsWith('+')) {
    return NextResponse.json({ message: 'Vennligst legg til landkode (f.eks. +47 for Norge).' }, { status: 400 });
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
      data 
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Serverfeil. Prøv igjen senere.' }, { status: 500 });
  }
}
