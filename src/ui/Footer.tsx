'use client';

import { Button, Col, Input, Row, Space } from 'antd';
import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoChevronUpOutline } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div className='bg-[#f7f6f2] py-24 relative'>
        <div className='container max-w-container m-auto flex items-center'>
          <div className='flex-1'>
            <div className='mb-0 text-2xl'>Subcribe to our Newsletter</div>
            <span className=' text-gray-600 text-sm'>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <Space.Compact className='flex-1 h-12'>
            <Input className='w-full' />
            <Button type='primary' className='text-base h-full shadow-none'>
              Đăng ký
            </Button>
          </Space.Compact>
        </div>
        <div className='back-to-top'>
          <div className='mouse-icon'>
            <div className='mouse-wheel'>
              <IoChevronUpOutline className='h-full text-white text-2xl' onClick={scrollUp} />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20 pb-40'>
        <div className='container flex max-w-container m-auto'>
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12} xl={6} className='pl-4 pr-6'>
              <div className='text-xl mb-5 font-bold'>Vegefoods</div>
              <div className='text-sm leading-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</div>
            </Col>
            <Col xs={0} md={1} xl={1} />
            <Col xs={23} md={11} xl={5}>
              <div className='text-xl mb-5 font-bold'>Menu</div>
              <Space direction='vertical' size='large'>
                <a>Shop</a>
                <a>About</a>
                <a>Journal</a>
                <a>Contact Us</a>
              </Space>
            </Col>
            <Col xs={0} md={1} xl={1} />
            <Col xs={23} md={11} xl={5}>
              <div className='text-xl mb-5 font-bold'>Help</div>
              <Space direction='vertical' size='large'>
                <a>Shipping Information</a>
                <a>Returns & Exchange</a>
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
              </Space>
            </Col>
            <Col xs={0} md={1} xl={1} />
            <Col xs={23} md={11} xl={5}>
              <div className='text-xl mb-5 font-bold'>Have a Questions?</div>
              <Space direction='vertical' size='large'>
                <div className='flex items-center gap-x-2'>
                  <FaMapMarkerAlt /> 141 Đường Phú Mỹ, Từ Liêm, Hà Nội
                </div>
                <div className='flex items-center gap-x-2'>
                  <BsTelephoneFill />
                  +2 392 3929 210
                </div>
                <div className='flex items-center gap-x-2'>
                  <SiGmail />
                  Test@gmail.com
                </div>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}
