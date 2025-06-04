import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Log the current path for debugging
  console.log('Middleware processing path:', url.pathname);
  
  // Only proceed with the trailing slash check if not already in a redirect loop
  // or if not trying to access login page (to avoid redirect loops)
  if (!url.pathname.endsWith('/') && 
      !url.pathname.includes('.') && 
      !url.pathname.startsWith('/login')) {
    url.pathname += '/';
    console.log('Adding trailing slash, redirecting to:', url.pathname);
    return NextResponse.redirect(url);
  }
  
  // Check for admin pages only - excluding the login route to prevent loops
  if (url.pathname.startsWith('/admin') && 
      !url.pathname.startsWith('/login')) {
    // Look for localStorage token - but this won't work in middleware
    // so we'll rely on the client-side check in the admin page component
    const token = request.cookies.get('admin_token')?.value;
    
    if (!token) {
      console.log('No admin token found, redirecting to login');
      // Avoid repeated redirects by checking if we're already on the login page
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', url.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images folder)
     * - login (avoid login page redirect loops)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|login).*)',
  ],
}; 