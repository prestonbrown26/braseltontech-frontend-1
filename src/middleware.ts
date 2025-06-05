import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /admin)
  const path = request.nextUrl.pathname;
  
  // If the path doesn't start with /admin, ignore this middleware
  if (!path.startsWith('/admin')) {
    return NextResponse.next();
  }
  
  // Specifically ignore the /admin/login path to prevent loops
  if (path === '/admin/login') {
    return NextResponse.next();
  }
  
  // Check if the admin_token cookie exists
  const token = request.cookies.get('admin_token')?.value;
  
  // If no token, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    // Add the current path as a "from" parameter to redirect back after login
    loginUrl.searchParams.set('from', path);
    return NextResponse.redirect(loginUrl);
  }
  
  // If token exists, allow the request
  return NextResponse.next();
}

// Specify which paths this middleware will run on
export const config = {
  matcher: [
    '/admin/:path*'
  ],
}; 