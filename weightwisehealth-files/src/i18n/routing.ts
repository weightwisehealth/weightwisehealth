import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      pt: '/sobre',
    },
    '/services': {
      en: '/services',
      pt: '/servicos',
    },
    '/contact': {
      en: '/contact',
      pt: '/contato',
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
