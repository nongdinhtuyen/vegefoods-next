'use client';

import { ProductProps } from './shop';
import { DEFAULT_PAGE_SIZE_MEDIUM } from '@/consts';
import { Pagination } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';

import classNames from 'classnames';
import _ from 'lodash';

export default function Product({ children, listProductTypes, total = 0 }: ProductProps) {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();
  const [_currentPage, setCurrentPage] = useState(Number(searchParams?.get('current') || 1));
  const [_selectType, setSelectType] = useState(0);

  const changeTypes = (index: string | number) => {
    // setSelectType(index);
    // getListProducts({ productType: index });
  };

  const createQuery = useCallback(
    (params = {}) => {
      const query = new URLSearchParams(searchParams);
      if (!_.isEmpty(params)) {
        _.forEach(params, (value, name) => {
          if (query.has(name)) {
            query.set(name, value);
          } else {
            query.append(name, value);
          }
        });
      }
      return query.toString();
    },
    [searchParams]
  );

  const fetchData = ({ page = 1, type = 0 }: { page?: number; type?: number }) => {
    setCurrentPage(page);
    const queryParams = createQuery({ current: page, type });
    router.push(`${pathname}?${queryParams}`);
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
        return React.cloneElement(child as React.ReactElement<any>, {});
      })}
      <div className='mt-4 text-center'>
        <Pagination
          onChange={(page) => fetchData({ page })}
          showSizeChanger={false}
          current={_currentPage}
          pageSize={DEFAULT_PAGE_SIZE_MEDIUM}
          total={total}
          hideOnSinglePage={true}
        />
      </div>
    </div>
  );
}
