import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt-BR', 'en', 'es', 'fr', 'de', 'it', 'ja'],
  defaultLocale: 'pt-BR'
});
