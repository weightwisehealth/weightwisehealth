import { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

const SUPPORTED_LOCALES = ['en', 'pt', 'es'];

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
