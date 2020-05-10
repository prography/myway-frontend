import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPartners } from 'store/partner/action';

const usePartner = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state: StoreState) => state.partner.items);

  const getData = useCallback(() => {
    dispatch(getPartners());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return partners;
};

export default usePartner;
