import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Path to your logo file
    const filePath = path.join(process.cwd(), 'public', 'images', 'braselton-tech-logo.jpg');
    
    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return new NextResponse(null, { status: 404 });
  }
} 