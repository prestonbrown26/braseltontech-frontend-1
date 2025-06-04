import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isAdminPage = url.pathname.startsWith('/admin');
  
  // If accessing admin pages, check for admin token
  if (isAdminPage) {
    const token = request.cookies.get('admin_token')?.value;
    
    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', url.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

// Only apply middleware to admin routes
export const config = {
  matcher: [
    // Only match admin routes
    '/admin/:path*'
  ],
}; 