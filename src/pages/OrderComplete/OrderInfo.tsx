import React from 'react';
import styled from 'styled-components';

const OrderInfo = () => {
  return (
    <>
      <InfoName>주문 정보</InfoName>
      <Info>
        <Corporation>
          <div>사업자명</div>
          <div>(주) 커넥트 플레이스</div>
        </Corporation>
        <Contact>
          <Tel>
            <div>휴대폰 번호</div>
            <div>010-1111-2222</div>
          </Tel>
          <Email>
            <div>이메일</div>
            <div>contact@copl.kr</div>
          </Email>
        </Contact>
        <Pay>
          <div>결제금액</div>
          <div>4,000원</div>
        </Pay>
      </Info>
    </>
  );
};

export default OrderInfo;

const InfoName = styled.div`
  font-size: 1.375rem;
  margin-bottom: 1.0rem;
`;

const Info = styled.div`
  font-size: 1.1rem;
  border-top: solid 2px #25262b;
  border-bottom: solid 2px #25262b;
`;

const Corporation = styled.div`
  border-bottom: solid 1px #25262b;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 2.0rem;
`;

const Contact = styled.div`
  border-bottom: solid 1px #25262b;
  display: grid;
  grid-template-columns: 55% 45%;
  padding: 2.0rem;
`;

const Tel = styled.div`
  display: grid;
  grid-template-columns: 27% 73%;
`;

const Email = styled.div`
  display: grid;
  grid-template-columns: 27% 73%;
`;

const Pay = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 2.0rem;
`;