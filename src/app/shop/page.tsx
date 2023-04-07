import { getListProductItems, getListProductTypes } from '@/api/Products/ProductsRequest';
import ListItems from '@/ui/Shop/ListItems';
import Products from '@/ui/Shop/Product';
import Image from 'next/image';

export default async function ShopPage() {
  const [listProductItems, listProductTypes] = await Promise.all([getListProductItems(), getListProductTypes()]);
  return (
    <div>
      <Image priority src='/bg_1.jpg' alt='' width='0' height={320} className='w-full object-cover' sizes='100vw' />
      <Products listProductTypes={listProductTypes.data} total={listProductTypes.total}>
        <ListItems listItems={listProductItems.data} />
      </Products>
    </div>
  );
}
