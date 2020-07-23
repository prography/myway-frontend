import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCartInfo } from 'store/cart/action';
import { Cart } from 'models/cart';

const useCartInfo: any = (cartList: Cart[]) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector(
    (state: StoreState) => state.cart.cartInfo.items,
  );

  const getData = useCallback(() => {
    dispatch(getCartInfo(cartList));
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return cartInfo;
};

export default useCartInfo;
