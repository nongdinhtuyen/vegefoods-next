'use client';

import store from '@/redux/store';
import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import React from 'react';
import { Provider } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          hashed: false,
          token: {
            colorPrimary: '#82ae46',
            colorPrimaryBg: '#82ae46',
          },
        }}
        locale={viVN}
      >
        {children}
      </ConfigProvider>
    </Provider>
  );
}
