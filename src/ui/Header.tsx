'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';

import classNames from 'classnames';
import _ from 'lodash';

export default function Header() {
  const [dropdown, setDropdown] = useState('');
  const isLogin = false;

  const dropdownHandle = () => {
    if (dropdown !== '') {
      setDropdown('');
    } else {
      setDropdown('show');
    }
  };

  const logout = () => {
    // dispatch(actions.actionLogout({}));
  };

  return (
    <div id='area' className={classNames('header')}>
      <div className='bg-primary py-1'>
        <div className='container m-auto max-w-container'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-1 items-center gap-x-1 text-white'>
              <FaPhoneAlt />
              <span className='text-xs '>012 3456 789</span>
            </div>
            <div className='flex flex-1 items-center gap-x-1 text-white'>
              <span className='icon-paper-plane'></span>
              <span className='text-xs  uppercase'>vegafoods@gmail.com</span>
            </div>
            <div className='flex-2 text-right'>
              <span className='text-xs  uppercase text-white'>Giao hàng trong vòng 3-5 ngày làm việc và đổi/trả hàng miễn phí</span>
            </div>
          </div>
        </div>
      </div>
      <div className='container m-auto flex max-w-container items-center justify-between py-4'>
        <Link className='text-xl font-extrabold uppercase !text-primary transition duration-500 hover:scale-110' href='/'>
          Vegefoods
        </Link>

        <div className='flex items-center gap-x-8'>
          <Link className='text-xs tracking-widest' href='/'>
            Home
          </Link>
          <Link className='flex tracking-widest' href='/cart'>
            <FaShoppingCart size={16} />
          </Link>
          {isLogin ? (
            <Link href='/login' className='text-xs tracking-widest'>
              Logout
            </Link>
          ) : (
            <Link href='/login' className='text-xs tracking-widest'>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
