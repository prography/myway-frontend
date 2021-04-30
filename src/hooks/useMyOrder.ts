import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken } from 'utils/auth';

import { myOrder } from 'store/auth/action';

const useMyOrders = () => {
  const dispatch = useDispatch();
  const token = getAuthToken()?.toString();
  const myOrderList = useSelector(
    (state: StoreState) => state.auth.myOrder.list,
  );

  const getData = useCallback(() => {
    dispatch(myOrder(token));
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return myOrderList;
};

export default useMyOrders;
