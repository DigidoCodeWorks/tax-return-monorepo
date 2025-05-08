import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userId = request.cookies.get('userId')?.value;

  const { pathname } = request.nextUrl;

  const publicPaths = ['/', '/login'];

  const isPublic =
    publicPaths.includes(pathname) ||
    publicPaths.some((p) => pathname.startsWith(p + '/'));

  if (!userId && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
};
