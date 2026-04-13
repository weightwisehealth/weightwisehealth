import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
  
  localePrefix: 'always',
  // Detect locale from browser but default to English
  localeDetection: true
});
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en|es|fr|de|it|ru)/:path*']
};
