import { NextRequest } from 'next/server';
import { google } from 'googleapis';

const clientId = process.env.GOOGLE_CLIENT_ID!;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;
const redirectUri = process.env.GOOGLE_REDIRECT_URI!;

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    // Step 1: redirect user to Google Login
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/drive.file"],
    });
    return Response.redirect(url);
  }

  // Step 2: exchange code for tokens
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // Save tokens in session or DB for reuse
  return new Response(JSON.stringify({ tokens }), { status: 200 });
}
