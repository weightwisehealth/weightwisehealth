import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WeightWise Health | Elite Optimization Protocol',
  description: 'Scientific protocol for advanced hormonal optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
