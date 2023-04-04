'use client';

import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function AntdProvider({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
      }}
      locale={viVN}
    >
      {children}
    </ConfigProvider>
  );
}
