import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
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
    window.alert('로그인을 먼저 해주세요 !');
    return (
      <Redirect to={'/login'}
      />
    );
  }

  return <OrderFormPage payInfo={payInfo} />;
};

export default OrderForm;

const BlockLabel = styled.p`
  font-size: 36px;
  text-align: center;
  padding: 100px 0;
`;
