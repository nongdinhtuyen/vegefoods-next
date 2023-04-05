export type ListProducts = {
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

export type GetListProducts = {
  current?: number;
  productType?: number;
};
