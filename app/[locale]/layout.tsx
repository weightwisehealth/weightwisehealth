import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

const SUPPORTED_LOCALES = ['en', 'pt', 'es'];

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
