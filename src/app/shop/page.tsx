import { getListProducts } from '@/api/Products/ProductsRequest';
import Banner from '@/ui/Home/Banner';
import Categories from '@/ui/Home/Category';
import CircleIcon from '@/ui/Home/CircleIcon';
import Breadcrumb from '@/ui/Shop/Breadcrumb';
import ListProducts from '@/ui/Shop/ListProducts';
import { Inter } from 'next/font/google';
import { use } from 'react';

export default function ShopPage() {
  const products = use(getListProducts());
  return (
    <div>
      <ListProducts />
    </div>
  );
}
