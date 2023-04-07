import { Axios } from 'axios';

export {};

declare global {
  interface Window {
    axios: Axios;
  }
}
