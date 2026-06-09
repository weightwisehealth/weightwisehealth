import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'pt', 'es'];
const DEFAULT_LOCALE = 'pt';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Se a URL já tem um locale válido, deixa passar
  if (SUPPORTED_LOCALES.some(locale => pathname.startsWith('/' + locale))) {
    return NextResponse.next();
  }

  // Se a URL é raiz, redireciona para o locale padrão
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/' + DEFAULT_LOCALE, request.url));
  }

  // Para qualquer outra rota sem locale, redireciona para o locale padrão
  return NextResponse.redirect(new URL('/' + DEFAULT_LOCALE + pathname, request.url));
}

export const config = {
  matcher: ['/((?!_next|.*\..*|api).*)'],
};
