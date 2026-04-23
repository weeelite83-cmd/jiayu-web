import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Check if pathname has a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // Redirect to default locale
  const redirectUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|robots.txt).*)'],
};
