import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import './globals.css';

const locales = ['pt-BR', 'en', 'es', 'fr', 'de', 'it', 'ja'];

export const metadata: Metadata = {
  title: 'WeightWise Health',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
