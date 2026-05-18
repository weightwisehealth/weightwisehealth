import type { Metadata, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'WeightWise Health',
  description: 'O primeiro sistema global onde o humano é o laboratório',
};

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
