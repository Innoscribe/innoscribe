// lib/googleSheet.ts
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), 'uploads.json'), // your credentials JSON
  scopes: SCOPES,
});

const SHEET_ID = '13HLygjy5AfKsYfofGOsTuTiCB7ZbuUFArioyCzxm4Zg'; // from your Sheet URL

export async function appendToSheet(data: any[]) {
  const authClient = (await auth.getClient()) as JWT; // ✅ Cast to JWT
  const sheets = google.sheets({ version: 'v4', auth: authClient });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Sheet1!A1', // or wherever you want to write
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [data],
    },
  });
}
