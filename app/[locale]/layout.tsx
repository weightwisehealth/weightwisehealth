import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({ children, params }: LayoutProps) {
  return (
    <html lang={params.locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
