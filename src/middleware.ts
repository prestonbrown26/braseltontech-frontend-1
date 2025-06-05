import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get('admin_token')?.value;
  
  // If accessing admin pages and no token exists, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', url.pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  // If token exists, allow access to admin pages
  return NextResponse.next();
}

// Only apply middleware to admin routes, excluding the login page
export const config = {
  matcher: [
    '/admin/:path*'
  ],
}; 