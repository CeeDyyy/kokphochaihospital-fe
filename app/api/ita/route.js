import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req) {  // No `res` in app directory API routes
    const url = new URL(req.url);
    const year = url.searchParams.get('year');  // Access query parameter

    const filePath = path.join(process.cwd(), 'ita', `ita${year}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');

    return new Response(JSON.stringify(JSON.parse(fileContents)), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
