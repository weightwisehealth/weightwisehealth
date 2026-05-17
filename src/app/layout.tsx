export const metadata = {
  title: 'WeightWise Health',
  description: 'Optimize your hormones',
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
