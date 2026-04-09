import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Inter} from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'WeightWise Health - Evidence-Based Hormone Optimization',
  description: 'Comprehensive resource for TRT, HRT, peptides, and longevity medicine. Science-backed protocols and research updates.',
  keywords: 'TRT, testosterone replacement therapy, HRT, hormone replacement therapy, peptides, semaglutide, longevity, BPC-157',
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
