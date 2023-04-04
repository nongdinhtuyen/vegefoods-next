'use client';

import Image from 'next/image';
import styled from 'styled-components';

type Item = {
  img: string;
  text: string;
  des: string;
  color: string;
};

const IconWrapper = styled.div`
  .icon {
    position: relative;
    line-height: 1.3;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    img {
      translate: 50% 50%;
    }
    &::after {
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      content: '';
      border: 2px solid rgba(255, 255, 255, 0.19);
      border-radius: 50%;
    }
  }
`;

export default function CircleIcon() {
  const item = ({ img, text, des, color }: Item) => (
    <IconWrapper color={color}>
      <div className='icon'>
        <Image src={img} width={50} alt='img' height={50} />
      </div>
      <h3 className='text-center text-base font-medium uppercase mb-3 mt-3'>{text}</h3>
      <div className='opacity-50 text-center text-sm'>{des}</div>
    </IconWrapper>
  );

  return (
    <div className='container max-w-container mt-20 m-auto'>
      <div className='flex align-items justify-between'>
        {item({
          color: '#e4b2d6',
          img: '/icons/shipped.svg',
          text: 'Miễn phí vận chuyển',
          des: 'Với đơn hàng trên $100',
        })}
        {item({
          color: '#dcc698',
          img: '/icons/diet.svg',
          text: 'Luôn tươi mới',
          des: 'Đóng gói sản phẩm tốt',
        })}
        {item({
          color: '#a2d1e1',
          img: '/icons/award.svg',
          text: 'Chất lượng cao',
          des: 'Sản phẩm được công nhận',
        })}
        {item({
          color: '#dcd691',
          img: '/icons/customer-service.svg',
          text: 'Hỗ trợ',
          des: '24/7',
        })}
      </div>
    </div>
  );
}
