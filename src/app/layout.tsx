import AntdProvider from '@/components/AntdProvider';

import '@/styles/globals.css';
import '@/styles/index.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <head>
        <title>VegeFoods</title>
        <link rel='shortcut icon' href='/vegetable.png' />
      </head>
      <body className='pb-10'>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
