import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Inter, Sen } from 'next/font/google';

import '@styles/index.scss';

const fontSen = Sen({ subsets: ['latin'], variable: '--font-primary' });
const fontInter = Inter({ subsets: ['latin'], variable: '--font-secondary' });

export const metadata = {
  title: 'Modsen blog',
  description: 'Best blog right here',
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={`${fontSen.variable} ${fontInter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
