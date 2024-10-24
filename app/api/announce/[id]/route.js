import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req, { params }) {  // No `res` in app directory API routes
    const { id } = params;  // Access the dynamic route parameter (id)

    // Fetch the appropriate file based on the id
    const filePath = path.join(process.cwd(), 'announce', `${id}.json`);

    try {
        const fileContents = await fs.readFile(filePath, 'utf8');

        return new Response(JSON.stringify(JSON.parse(fileContents)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch {
        return new Response(JSON.stringify(null), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
