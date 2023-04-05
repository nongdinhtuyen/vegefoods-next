import AntdProvider from '@/components/AntdProvider';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import type { Metadata } from 'next';

import '@/styles/globals.css';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'VegeFoods',
  description: 'Bán hoa quả online',
  icons: "/bg_1.jpg"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body>
        <AntdProvider>
          <Header />
          {children}
          <Footer />
        </AntdProvider>
      </body>
    </html>
  );
}
