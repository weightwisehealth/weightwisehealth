import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: 'WeightWise Health',
  description: 'The first global system where the human is the laboratory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
