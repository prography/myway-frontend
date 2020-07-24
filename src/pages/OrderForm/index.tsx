import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OrderFormPage from './OrderFormPage';
import { useSelector } from 'react-redux';
import { CartInfo } from 'models/cart';

const OrderForm = (props: any) => {
  const [payInfo, setPayInfo] = useState<CartInfo[]>(props.location.state?.payInfo);
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.me.isLoggedIn,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!props.location.state?.payInfo || !isLoggedIn) {
    return <BlockLabel>권한이 없습니다.</BlockLabel>;
  }

  return <OrderFormPage payInfo={payInfo} />;
};

export default OrderForm;

const BlockLabel = styled.p`
  font-size: 36px;
  text-align: center;
  padding: 100px 0;
`;
