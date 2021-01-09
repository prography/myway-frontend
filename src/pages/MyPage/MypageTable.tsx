import React from 'react';
import styled from 'styled-components';
import { adReservationInfo } from '../../models/reservationInfo';

type Props = {
  info: adReservationInfo;
};

function ChangeStatus(props : any){
  switch(props.value) {
    case 0 : 
      return "미업로드";
    case 1 : 
      return "대기중";
    case 2 : 
      return "승인 완료";
    case 3 :
      return "거절";
    default : 
      return "해당 없음"
  }
}

const MypageTable: React.FC<Props> = ({ info }) => {
  return (
    <>
      <OrderTitle>
        <div>주문일</div>
        <div>주문번호</div>
        <div>공간정보</div>
        <div>시간</div>
        <div>주문금액</div>
        <div>진행상황</div>
      </OrderTitle>
      {info.adTimeTables.map((item, index) => (
          <OrderItem key={index}>
          <OrderCompleteDate>{info.createdAt}</OrderCompleteDate>
          <OrderId>{info.adReservationId}</OrderId>
          <OrderPlace>
            <PlaceImg src={item.partnerImgUrl} />
            <div>
              <PlaceName>{item.partnerStoreName}</PlaceName>
              <div>{item.partnerAddress}</div>
              <div>{item.partnerPhone}</div>
            </div>
          </OrderPlace>
          <OrderTime>{item.adDate}<br />{item.adHour}시 ~ {item.adHour + 1}시</OrderTime>
          <OrderPrice>{item.partnerPricePerHour.toLocaleString()}원</OrderPrice>
          <OrderStatus>
            {ChangeStatus(info.adStatus)}
          </OrderStatus>
        </OrderItem>
      ))}
    </>
  );
};

export default MypageTable;

const OrderTitle = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 40% 10% 15% 15%;
  font-size: 1.rem;
  text-align: center;
  padding: 1rem 0;
  border-top: solid 2px #25262b;
`;

const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 40% 10% 15% 15%;
  font-size: 1rem;
  border-top: solid 0.2px #bbbbbb;
  padding: 1.25rem 0;
`;

const OrderCompleteDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const OrderStatus = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;