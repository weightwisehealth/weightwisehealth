import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

interface Props {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export const metadata = {
  title: 'WeightWise Health',
  description: 'O primeiro sistema global onde o humano é o laboratório',
};

export default async function LocaleLayout({ children, params }: Props) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
