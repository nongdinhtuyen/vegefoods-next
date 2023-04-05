import { cache } from 'react';

export const getBaseUrl = cache(() => 'http://192.168.68.104:4869/v1/orderfood');

export const getBaseUrlImage = (img: string) => {
  return `http://127.0.0.1:8089/raw/${img}`
}

