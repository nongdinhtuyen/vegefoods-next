import { PageProps } from '@/@types/page';
import { getListProductItems, getListProductTypes } from '@/api/Products/ProductsRequest';
import { ProductsSkeleton } from '@/components/Skeleton';
import ListItems from '@/ui/Shop/ListItems';
import Products from '@/ui/Shop/Product';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function ShopPage({ params, searchParams }: PageProps) {
  console.log('🚀 ~ file: page.tsx:7 ~ ShopPage ~ params:', params, searchParams);
  const [listProductItems, listProductTypes] = await Promise.all([getListProductItems(searchParams), getListProductTypes()]);
  // const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh', { next: { revalidate: 60 } });
  // const data = await res.json();
  return (
    <div>
      {/* <h1 className='font-bold text-3xl'>{data.datetime}</h1> */}
      <Image priority src='/bg_1.jpg' alt='' width='0' height={320} className='w-full object-cover' sizes='100vw' />
      <Products listProductTypes={listProductTypes.data} total={listProductItems.total}>
        <Suspense fallback={<ProductsSkeleton />}>
          <ListItems listItems={listProductItems.data} />
        </Suspense>
      </Products>
    </div>
  );
}
