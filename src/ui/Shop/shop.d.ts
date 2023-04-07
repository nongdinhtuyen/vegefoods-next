export type ResponseType = {
  code?: number;
  msg?: string;
  data?: ListProductsType[] | any;
  total?: number;
};

export type ListProductsType = {
  id: number;
  name: string;
  img: string;
  price: number;
  unit: string;
  remain: number;
  sold: number;
  description: string;
  rateAVG: number;
  idType: number;
  productTypeList: [Object];
};

export type GetListProductsType = {
  current?: number;
  count?: number;
  productType?: number;
};

export type ShopChildProps = {
  products: Draft;
};

export type ProductProps = {
  listProductTypes: any[];
  children: React.ReactNode;
  total?: number;
};

export type Draft = {
  total: number;
  current: number;
  data: ListProductsType[] | [];
};
