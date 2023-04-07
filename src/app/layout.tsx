import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import type { Metadata } from 'next';

import '@/styles/globals.css';
import '@/styles/index.scss';
import AppProvider from '@/components/AppProvider';

export const metadata: Metadata = {
  title: 'VegeFoods',
  description: 'Bán hoa quả online',
  icons: "/apple-touch-icon.png"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
