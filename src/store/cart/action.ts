import { createEntity } from 'utils/redux';
import * as partnerApi from 'api/partner';
import { Cart } from 'models/cart';

export const GET_CART_INFO = 'GET_CART_INFO';

export const getCartInfoEntity = createEntity(
  GET_CART_INFO,
  partnerApi.getCartInfo,
);

export const getCartInfo = (params: Cart[]) => ({
  type: GET_CART_INFO,
  params,
});

export type GetCartInfo = ReturnType<typeof getCartInfo>;
