import type { ListProducts, GetListProducts } from './products';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { notFound } from 'next/navigation';

export const getListProducts = async ({ current = 1, productType = 0 }: GetListProducts = {}) => {
  const res = await fetch(`${getBaseUrl()}/product/current=${current}&productType=${productType}`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const listProducts = (await res.json()) as ListProducts[];

  if (listProducts.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return listProducts;
  // We'd normally get data from an external data source
};
