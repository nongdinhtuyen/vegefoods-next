import Header from '@/ui/Header';
import Banner from '@/ui/Home/Banner';
import CircleIcon from '@/ui/Home/CircleIcon';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CircleIcon />
    </div>
  );
}
