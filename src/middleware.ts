import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es', 'pt', 'fr', 'de', 'it', 'ru', 'zh', 'ar', 'hi', 'ja', 'ko', 'tr'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|es|pt|fr|de|it|ru|zh|ar|hi|ja|ko|tr)/:path*']
};
