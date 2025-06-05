import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware intentionally does NOTHING with authentication
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(_: NextRequest) {
  return NextResponse.next();
}

// Matches all paths, but we're not doing anything in the middleware
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}; 