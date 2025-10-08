import { NextRequest } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll("files") as File[];

  if (!files || files.length === 0) {
    return new Response(JSON.stringify({ error: "No files uploaded" }), { status: 400 });
  }

  try {
    const tokens = JSON.parse(process.env.GOOGLE_TOKENS!);

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials(tokens);

    const drive = google.drive({ version: "v3", auth: oauth2Client });

    const uploadedUrls: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const stream = Readable.from(buffer);

      const res = await drive.files.create({
        requestBody: {
          name: file.name,
          parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!],
        },
        media: {
          mimeType: file.type,
          body: stream,
        },
        fields: "id, webViewLink",
      });

      uploadedUrls.push(res.data.webViewLink!);
    }

    return new Response(JSON.stringify({ urls: uploadedUrls }), { status: 200 });
  } catch (err) {
    console.error("Upload Error:", err);
    return new Response(JSON.stringify({ error: "Upload failed" }), { status: 500 });
  }
}
