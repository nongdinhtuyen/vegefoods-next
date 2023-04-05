import { getListProducts } from '@/api/Products/ProductsRequest';
import Image from 'next/image';
import { use } from 'react';

export default function Breadcrumb() {
  const products = use(getListProducts({}));
  console.log('🚀 ~ file: Breadcrumb.tsx:7 ~ Breadcrumb ~ products:', products);
  // return <Image />;
  return <div>123123</div>;
}
