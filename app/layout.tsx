import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { inter } from './fonts';
import { Providers } from './providers';

export const metadata = {
  title: 'Short URL',
  description: 'Short links with superpowers',
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html className={inter.variable} lang="en">
      <body className="bg-white text-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
