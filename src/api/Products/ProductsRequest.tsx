import { DEFAULT_PAGE_SIZE_MEDIUM } from '@/consts';
import { getBaseUrl } from '@/lib/getBaseUrl';
import type { GetListProductsType, ListProductsType, ResponseType } from '@/ui/Shop/shop';
import { notFound } from 'next/navigation';

export const getListProductItems = async ({ current = 1, productType = 0, count = DEFAULT_PAGE_SIZE_MEDIUM }: GetListProductsType = {}) => {
  const res = await fetch(`${getBaseUrl()}/product?current=${current}&count=${count}&productType=${productType}`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const response = (await res.json()) as ResponseType;

  if (response.code === 404) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return response;
  // We'd normally get data from an external data source
};

export const getListProductTypes = async () => {
  const res = await fetch(`${getBaseUrl()}/product/type`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const response = (await res.json()) as ResponseType;

  if (response.code === 404) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return response;
  // We'd normally get data from an external data source
};
