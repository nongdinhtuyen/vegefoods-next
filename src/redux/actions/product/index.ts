import { createAction } from '@reduxjs/toolkit';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const GET_PRODUCT_BY_ID = 'GET_PRODUCTS_BY_D';

export const GET_PRODUCT_TYPES = 'GET_PRODUCT_TYPES';
export const FETCH_PRODUCT_SUCCEED = 'FETCH_PRODUCT_SUCCEED';
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED';

export const FETCH_COMMENT = 'FETCH_COMMENT';
export const FETCH_COMMENT_SUCCEED = 'FETCH_COMMENT_SUCCEED';
export const FETCH_COMMENT_FAILED = 'FETCH_COMMENT_FAILED';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_FAILED = 'CREATE_COMMENT_FAILED';

export const RATE = 'RATE';

const productActions = {
  actionGetProducts: createAction<ActionPayloadStandard>(GET_PRODUCTS),
  actionGetProductTypes: createAction<ActionPayloadStandard>(GET_PRODUCT_TYPES),
  actionGetProductById: createAction<ActionPayloadStandard>(GET_PRODUCT_BY_ID),
};

export default productActions;
