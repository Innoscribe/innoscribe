import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      assistantName,
      voice,
      scriptFiles,
      faqFiles,
      automations,
      customAutomation,
      welcomeMessage,
      faq,
      businessHours,
      businessName,
      businessType,
      industry,
      website,
      language,
      social,
      goal,
      role,
      apiKeyStatus,
      apiKeyValue,
      thirdPartyApps,
    } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const sheetId = process.env.SHEET_ID;

    // ✅ Always convert arrays → strings (or empty string if null/undefined)
    const toCell = (v: any) =>
      Array.isArray(v) ? v.join(', ') : (v ?? '');

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            toCell(fullName),
            toCell(email),
            toCell(phone),
            toCell(businessName),
            toCell(businessType),
            toCell(industry),
            toCell(website),
            toCell(language),
            toCell(social),
            toCell(role),
            toCell(goal),
            toCell(assistantName),
            toCell(voice),
            toCell(scriptFiles),
            toCell(faqFiles),
            toCell(automations),
            toCell(customAutomation),
            toCell(welcomeMessage),
            toCell(faq),
            toCell(businessHours),
            toCell(thirdPartyApps),
            toCell(apiKeyStatus),
            toCell(apiKeyValue),
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ success: false, error: 'Something went wrong' }, { status: 500 });
  }
}
