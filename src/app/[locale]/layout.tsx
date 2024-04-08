import { ReactNode } from 'react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Inter, Sen } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import '@styles/index.scss';

const fontSen = Sen({ subsets: ['latin'], variable: '--font-primary' });
const fontInter = Inter({ subsets: ['latin'], variable: '--font-secondary' });

export const metadata = {
  title: 'Modsen blog',
  description: 'Best blog right here',
};

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={`${fontSen.variable} ${fontInter.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
