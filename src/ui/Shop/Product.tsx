'use client';

import { Draft, GetListProductsType, ProductProps, ShopChildProps } from './shop';
import { getBaseUrlImage } from '@/lib/getBaseUrl';
import productActions from '@/redux/actions/product';
import { Pagination } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useImmer } from 'use-immer';

import classNames from 'classnames';
import _ from 'lodash';
import { DEFAULT_PAGE_SIZE_MEDIUM } from '@/consts';

export default function Product({ children, listProductTypes, total = 0 }: ProductProps) {
  const dispatch = useDispatch();
  const [_products, setProducts] = useImmer<Draft>({
    total: 0,
    current: 1,
    data: [],
  });
  const [_productTypes, setProductTypes] = useImmer<Draft>({
    total: 0,
    current: 1,
    data: [],
  });
  const [_selectType, setSelectType] = useState(0);

  const getListProducts = ({ current = 1, productType = 0 }: GetListProductsType = {}) => {
    dispatch(
      productActions.actionGetProducts({
        params: {
          current,
          productType,
        },
        callbacks: {
          onSuccess({ data, total }) {
            setProducts((draft) => {
              draft.total = total;
              draft.data = data;
            });
          },
        },
      })
    );
  };

  // useEffect(() => {
  //   getListProducts();
  //   getProductTypes();
  // item.fetchProduct({ current: 1 });
  // }, []);

  const changeTypes = (index: string | number) => {
    // setSelectType(index);
    // getListProducts({ productType: index });
  };

  return (
    <div className='container m-auto mt-16 max-w-container'>
      <div className='flex items-center justify-center mb-3'>
        {_.map([{ name: 'All' }, ...listProductTypes], (item: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              changeTypes(index);
            }}
            className={classNames(
              'text-base py-2 px-5 rounded-md cursor-pointer',
              _selectType === index ? ['bg-primary', 'text-white'] : 'text-primary'
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<ShopChildProps>, {
          products: _products,
        });
      })}
      <div className='col text-center'>
        <Pagination
          // onChange={props.onPageChange}
          showSizeChanger={false}
          defaultCurrent={1}
          pageSize={DEFAULT_PAGE_SIZE_MEDIUM}
          total={total}
          hideOnSinglePage={true}
        />
      </div>
    </div>
  );
}
