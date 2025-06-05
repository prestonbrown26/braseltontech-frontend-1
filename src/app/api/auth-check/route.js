import { NextResponse } from 'next/server';

// This route will help us debug authentication issues
export async function GET(request) {
  // Get all cookies from the request
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    if (key) acc[key] = value;
    return acc;
  }, {});
  
  // Check for admin token
  const hasAdminToken = 'admin_token' in cookies;
  
  // Return the token status (but not the token itself for security)
  return NextResponse.json({
    authenticated: hasAdminToken,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'unknown',
  });
} 