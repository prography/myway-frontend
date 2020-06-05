import React from 'react';
import styled from 'styled-components';
import OrderFormPage from './OrderFormPage';
import { useSelector } from 'react-redux';

const OrderForm = (props: any) => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.me.isLoggedIn,
  );

  if (!props.location.state?.payInfo || !isLoggedIn) {
    return <BlockLabel>권한이 없습니다.</BlockLabel>;
  }

  const { partnerInfo, timeList } = props.location.state.payInfo;

  return <OrderFormPage partnerInfo={partnerInfo} timeList={timeList} />;
};

export default OrderForm;

const BlockLabel = styled.p`
  font-size: 36px;
  text-align: center;
  padding: 100px 0;
`;
