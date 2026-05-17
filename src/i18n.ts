import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt-BR', 'en', 'es', 'fr', 'de', 'it', 'ja'],
  defaultLocale: 'pt-BR',
  localePrefix: 'as-needed',
});
