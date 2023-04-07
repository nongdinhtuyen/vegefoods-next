import { Lora } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import classNames from 'classnames';

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
});

function Categories() {
  return (
    <div className='container max-w-container flex m-auto gap-x-6'>
      <div className='flex-1 flex flex-col justify-between'>
        <Image src='/images/category-1.jpg' alt='' width='0' className='w-full' sizes='100vw' height={250} />
        <Image src='/images/category-2.jpg' alt='' width='0' className='w-full' sizes='100vw' height={250} />
      </div>
      <div className='relative flex-1'>
        <div className='absolute text-center w-full h-full top-5'>
          <h2 className={classNames(lora.className, 'text-2xl italic text-primary')}>Vegetables</h2>
          <p className='text-gray-600 text-base mt-2 mb-4'>Bảo vệ sức khỏe mọi nhà</p>
          <Link href='/shop' className='btn-primary'>
            Xem chi tiết
          </Link>
        </div>
        <Image src='/images/category.jpg' alt='' width='0' height='0' className='w-full h-full' sizes='100vw' />
      </div>
      <div className='flex-1 flex flex-col justify-between'>
        <Image src='/images/category-3.jpg' alt='' width='0' className='w-full  mb-4' sizes='100vw' height={250} />
        <Image src='/images/category-4.jpg' alt='' width='0' className='w-full' sizes='100vw' height={250} />
      </div>
    </div>
  );
}

export default Categories;
