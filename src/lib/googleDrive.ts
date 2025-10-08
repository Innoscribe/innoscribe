// lib/googleDrive.ts
import { google } from 'googleapis';
import { Readable } from 'stream';
import { JWT } from 'google-auth-library';
import path from 'path';
import fs from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/drive'];


const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'uploads.json'),
    scopes: SCOPES,
});

export async function uploadToDrive(file: File, folderId: string) {
    const authClient = (await auth.getClient()) as JWT;
    const drive = google.drive({ version: 'v3', auth: authClient });

    const buffer = Buffer.from(await file.arrayBuffer());

    const res = await drive.files.create({
        requestBody: {
            name: file.name,
            parents: [folderId],
        },
        media: {
            mimeType: file.type,
            body: Readable.from(buffer),
        },
        fields: 'id',
    });

    const fileId = res.data.id;

    // Make file public
    if (!fileId) throw new Error('File ID not found');

    await drive.permissions.create({
        fileId: fileId as string, // safely cast or ensure it's not null
        requestBody: {
            role: 'reader',
            type: 'anyone',
        },
    });


    const publicUrl = `https://drive.google.com/uc?id=${fileId}`;
    return publicUrl;
}
