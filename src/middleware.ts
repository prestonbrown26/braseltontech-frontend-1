import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware is intentionally minimal to avoid redirect loops
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(_: NextRequest) {
  // Just pass through all requests - we'll handle auth client-side
  return NextResponse.next();
}

// We're not using middleware for auth anymore, but this keeps it in place
// in case we need it for something else in the future
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}; 