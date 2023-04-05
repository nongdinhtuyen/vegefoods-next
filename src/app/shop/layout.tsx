import AntdProvider from '@/components/AntdProvider';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';

import '@/styles/globals.css';
import '@/styles/index.scss';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
