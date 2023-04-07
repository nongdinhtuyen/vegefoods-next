import { ListProductsType } from './shop';
import { getBaseUrlImage } from '@/lib/getBaseUrl';
import Image from 'next/image';
import Link from 'next/link';

import _ from 'lodash';

type Props = {
  listItems: ListProductsType[];
};

export default function ListItems({ listItems }: Props) {
  return (
    <div className='flex flex-wrap justify-between'>
      {_.map(listItems, (item: ListProductsType, index) => (
        <div key={index} className='w-[23%] flex flex-col'>
          <Link href={`/product/${item.id}`} className=' overflow-hidden flex flex-1'>
            <Image
              className='h-auto w-full hover:scale-110 transition duration-300 object-contain'
              src={getBaseUrlImage(item.img)}
              width='0'
              height='0'
              sizes='100vw'
              alt={item.img}
            />
          </Link>
          <div className='text py-3 pb-4 px-3 text-center'>
            <div className='text-2xl'>
              <Link href={`/product/${item.id}`}>{item.name}</Link>
            </div>
            <div className='d-flex'>
              <div className='pricing'>
                <p className='price'>
                  <span>{item.price?.toFixed(2)} VNĐ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
