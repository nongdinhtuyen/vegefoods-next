import { PageProps } from '@/@types/page';
import { DEFAULT_PAGE_SIZE_MEDIUM } from '@/consts';
import { getBaseUrl } from '@/lib/getBaseUrl';
import type { ResponseType } from '@/ui/Shop/shop';
import { notFound } from 'next/navigation';
import queryString from 'query-string';

export const getListProductItems = async (searchParams: PageProps['searchParams']) => {
  const urlParams = {
    current: searchParams.current || 1,
    productType: searchParams.productType || 0,
    count: DEFAULT_PAGE_SIZE_MEDIUM,
  };
  const fetchQuery = queryString.stringify(urlParams);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${getBaseUrl()}/product?${fetchQuery}`, {
    // next: { revalidate: 60 },
    cache: 'no-store',
  });

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const response = (await res.json()) as ResponseType;
  console.log('🚀 ~ file: ProductsRequest.tsx:27 ~ getListProductItems ~ response:', response);

  if (response.code === 404) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return response;
  // We'd normally get data from an external data source
};

export const getListProductTypes = async () => {
  const res = await fetch(`${getBaseUrl()}/product/type`, { next: { revalidate: 60 } });

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
