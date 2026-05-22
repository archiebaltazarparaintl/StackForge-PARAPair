import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get('access_token')?.value;

  const isAuthPage = pathname === '/login' || pathname === '/register';
  const isDashboard = pathname.startsWith('/dashboard');

  // ❌ No token → block dashboard only
  if (isDashboard && !token) {
    return NextResponse.redirect(
      new URL('/login', request.url),
    );
  }

  // ❌ Token exists → block auth pages only (avoid unnecessary redirect loops)
  if (isAuthPage && token) {
    return NextResponse.redirect(
      new URL('/dashboard', request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};