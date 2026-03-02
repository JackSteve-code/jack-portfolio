import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jack’s Portfolio',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} antialiased`}>
        {/* your nav-pill, horizon, stars, etc. if they're JSX */}
        {children}
      </body>
    </html>
  );
}