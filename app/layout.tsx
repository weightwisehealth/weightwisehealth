import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WeightWise Health',
  description: 'O primeiro sistema global onde o humano é o laboratório',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
