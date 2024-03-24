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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontSen.variable} ${fontInter.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
