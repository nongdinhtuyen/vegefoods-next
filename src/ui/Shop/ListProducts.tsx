import { getListProducts } from '@/api/Products/ProductsRequest';
import Image from 'next/image';
import { use } from 'react';

export default function ListProducts() {
  const products = use(getListProducts({}));
  console.log('🚀 ~ file: Breadcrumb.tsx:7 ~ Breadcrumb ~ products:', products);
  return (
    <div>
      <Image src='/bg_1.jpg' alt='' width='0' height={320} className='w-full object-cover' sizes='100vw' />
    </div>
  );
}
