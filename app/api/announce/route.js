import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    const directoryPath = path.join(process.cwd(), 'announce');  // Your directory with JSON files

    try {
        // Read the list of files in the directory
        const files = await fs.readdir(directoryPath);

        // Map through the JSON files and fetch their content
        const filesData = await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(directoryPath, file);
                const fileContents = await fs.readFile(filePath, 'utf8');
                return {
                    fileName: file.replace('.json', ''),  // Remove the ".json" extension
                    content: JSON.parse(fileContents)  // Parse and return the file content
                };
            })
        );

        // Return the file names and content in the response
        return new Response(JSON.stringify({
            announces: filesData
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error reading files:', error);
        return new Response(JSON.stringify({ error: 'Failed to list files' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
