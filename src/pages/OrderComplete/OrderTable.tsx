import React from 'react';
import styled from 'styled-components';

const OrderTable = () => {
  return (
    <>
      <OrderTitle>
        <div>공간정보</div>
        <div>시간</div>
        <div>주문금액</div>
      </OrderTitle>
      <OrderItem>
        <OrderPlace>
          <PlaceImg src={`https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg`} />
          <div>
            <PlaceName>강남역 카페</PlaceName>
            <div>서울시 강남구</div>
            <div>010-1111-2222</div>
          </div>
        </OrderPlace>
        <OrderTime>3</OrderTime>
        <OrderPrice>3,000원</OrderPrice>
      </OrderItem>
      <OrderItem>
        <OrderPlace>
          <PlaceImg src={`https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg`} />
          <div>
            <PlaceName>강남역 카페</PlaceName>
            <div>서울시 강남구</div>
            <div>010-1111-2222</div>
          </div>
        </OrderPlace>
        <OrderTime>3</OrderTime>
        <OrderPrice>3,000원</OrderPrice>
      </OrderItem>
      <TotalPrice>
        <div>총 결제금액</div>
        <div>무통장 입금 / 4,000원</div>
      </TotalPrice>
    </>
  );
};

export default OrderTable;

const OrderTitle = styled.div`
  display: grid;
  grid-template-columns: 55% 20% 25%;
  font-size: 1.375rem;
  text-align: center;
  padding: 1.25rem 0;
  border-top: solid 2px #25262b;
`;

const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 55% 20% 25%;
  font-size: 1.375rem;
  border-top: solid 0.2px #bbbbbb;
  padding: 1.25rem 0;
`;

const OrderPlace = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlaceName = styled.div`
  font-weight: 600;
`;

const PlaceImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  margin: 0 2.5rem;
`;

const OrderTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.375rem;
  padding: 2.0rem;
  border-top: solid 2px #25262b;
  border-bottom: solid 2px #25262b;
  margin-bottom: 4.25rem;
`;