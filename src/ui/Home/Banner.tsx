'use client';

import { Amatic_SC } from 'next/font/google';
import { Carousel } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

type ItemProps = {
  img: string;
  text: string;
  des: string;
};

const amaticSC = Amatic_SC({
  weight: '400',
  subsets:['latin']
});

const ItemWrapper = styled.div`
  background: url(${({ bg }) => bg}) center center / cover no-repeat;
  height: 650px;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000;
    opacity: 0.2;
    z-index: 1;
  }
  .sub {
    text-align: center;
    position: inherit;
    z-index: 9;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
    h1 {
      font-size: 8vw;
      color: #fff;
      line-height: 1.3;
      font-weight: 400;
    }
    h2 {
      font-weight: 300;
      font-size: 12px;
      letter-spacing: 4px;
      text-transform: uppercase;
      display: inline-block;
      color: #fff;
      margin: 1.5rem 0 3rem;
    }
  }
`;

const Item = ({ img, text, des }: ItemProps) => (
  <ItemWrapper bg={img}>
    <div className='overlay' />
    <div className='sub container max-w-container'>
      <h1 className={amaticSC.className}>{text}</h1>
      <h2>{des}</h2>
      <Link href='/shop' className='btn-primary'>
        Xem chi tiết
      </Link>
    </div>
  </ItemWrapper>
);

export default function Banner() {
  return (
    <Carousel autoplay effect='fade' dots={false}>
      <Item img='/bg_1.jpg' text='Chúng tôi phục vụ Rau tươi &amp; Trái cây' des='Sạch từ nông trại đến bàn ăn' />
      <Item img='/bg_2.jpg' text='100% Tươi &amp; Thức ăn hữu cơ' des='Tươi ngon từ vườn tươi đến tay bạn' />
      <Item img='/bg_2.jpg' text='Rau sạch organic cho cuộc sống tươi đẹp hơn' des='Không có chất bảo quản' />
    </Carousel>
  );
}
