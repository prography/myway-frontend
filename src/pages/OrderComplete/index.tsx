import React from 'react';
import styled from 'styled-components';
import OrderTable from './OrderTable';
import OrderInfo from './OrderInfo';

const OrderComplete = () => {

  return (
    <CompleteWrapper>
      <CompleteTitle>주문이 완료되었습니다</CompleteTitle>
      <CompleteDesc>
        {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일에 주문하신 주문번호는
        <span> 0123456789 </span>입니다
      </CompleteDesc>
      <OrderTable />
      <OrderInfo />
      <ButtonWrapper>
        <Button>주문내역 확인</Button>
        <Button color="orange">쇼핑 계속하기</Button>
      </ButtonWrapper>
    </CompleteWrapper>
  );
}

export default OrderComplete;

const CompleteWrapper = styled.div`
  padding: 6.25rem 14.25rem;
`;

const CompleteTitle = styled.h2`
  font-size: 2.5rem;
  font-family: NotoSansCJKkr-DemiLight;
  text-align: center;
  margin-bottom: 1.125rem;
`;

const CompleteDesc = styled.h2`
  font-size: 1.375rem;
  font-family: NotoSansCJKkr-DemiLight;
  text-align: center;
  font-weight: 400;
  margin-bottom: 4.4375rem;

  span {
    color: #fe4600;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.75rem 0;
`;

const Button = styled('button') <{ color?: string }>`
  width: 48%;
  padding: 0.875rem 2.75rem;
  background-color: ${(props) => props.color === 'orange' ? '#fe4600' : '#ffffff'};
  color: ${(props) => props.color === 'orange' ? '#ffffff' : '#25262b'};
  ${(props) => props.color || `border: solid 1px #929295;`};
  border-radius: 3px;
  font-size: 1.375rem;
`;
