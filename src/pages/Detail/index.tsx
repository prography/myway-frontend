import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { RouteComponentProps } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPartnerDetail } from 'store/partner/action';
import TimeSelect from './TimeSelect';
import CartHelper from 'utils/cart';

interface MatchParams {
  id: string;
}

type CartItem = {
  id: number;
  date: string;
  time: number;
}

const Detail: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);

  const dispatch = useDispatch();
  const detailInfo = useSelector(
    (state: StoreState) => state.partner.partnerDetail.item
  );

  useEffect(() => {
    dispatch(getPartnerDetail(parseInt(match.params.id)));
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    if (!time) return;
    // TODO : 아이템 중복 체크
    setCart([
      ...cart, {
        id: parseInt(match.params.id), 
        date, 
        time,
      }
    ]);
  }, [time]);

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      setTime(parseInt(e.currentTarget.value));
    }
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    setCart(
      cart.filter((item, idx) => 
        idx !== parseInt(e.currentTarget.dataset.id || '')
      )
    );
  };

  const handleAddCart = () => {
    CartHelper.addCart(JSON.stringify(cart));
  };

  return (
    <DetailContainer>
      <PageTitle>HOME > COPL ZONE > 가게 상세</PageTitle>
      <DetailWrapper>
        <PictureWrapper>

        </PictureWrapper>
        <InfoWrapper>
          <PartnerName>{detailInfo.name}</PartnerName>
          <PartnerContact>
            <div>{detailInfo.address}</div>
            <div>{detailInfo.phone}</div>
          </PartnerContact>
          <Hr />
          <Option>
            <OptionTitle>금액</OptionTitle>
            <OptionTitle>{detailInfo.pricePerHour} 원/ 시간</OptionTitle>
          </Option>
          <Option>
            <OptionTitle>날짜</OptionTitle>
            <input 
              id="date"
              type="date"
              min={new Date().toISOString().split("T",1).toString()}
              onChange={handleChangeDate}
            />
          </Option>
          <Option>
            <OptionTitle>시간</OptionTitle>
            <TimeSelect 
              date={date} 
              availAdTimeTables={detailInfo.availAdTimeTables}
              onChange={handleChangeTime}
            />
          </Option>
          {cart.length > 0 && <ThinHr />}
          {cart.map((item, idx) => (
            <SelectionWrapper key={idx}>
              <div>선택 {idx+1}</div>
              <div>
                {detailInfo.name} / {item.date} / {item.time}:00 ~ {item.time+1}:00 
                <DelButton data-id={idx} onClick={handleDelete}>X</DelButton>
              </div>
            </SelectionWrapper>
          ))}
          <ThinHr />
          <PriceWrapper>
            <PriceTitle>총 결제금액</PriceTitle>
            <Price>{(cart.length * detailInfo.pricePerHour).toLocaleString()}원 ({cart.length}시간) </Price>
          </PriceWrapper>
          <ThinHr />
          <PayWrapper>
            <Button onClick={handleAddCart}>장바구니 담기</Button>
            <Button color="black">바로 구매하기</Button>
          </PayWrapper>
          <Hr />
        </InfoWrapper>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default React.memo(Detail);

const DetailContainer = styled.div`
  padding: 6.25rem 11.25rem;
`;

const PageTitle = styled.h2`
  font-size: 0.875rem;
  font-family:NotoSansCJKkr-DemiLight;
  color: #101010;
  text-align: left;
  margin-bottom: 1.56rem;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const PictureWrapper = styled.div`
  width: 50%;
  height: 850px;
  position: relative;
`;

const InfoWrapper = styled.div`
  width: 50%;
  height: 850px;
  position: relative;
`;

const PartnerName = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Medium;
  text-align: left;
  margin-bottom: 1.8rem;
`;

const PartnerContact = styled.div`
  font-size: 1.25rem;
  font-family: Noto Sans KR Thin;
  margin-bottom: 3.125rem;
`;

const Hr = styled.hr`
  border: solid 0.6px #25262b;
  margin: 1.25rem 0;
`;

const ThinHr = styled.hr`
  border: solid 0.2px #bbbbbb;
  margin: 1.25rem 0;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.0rem 0;
`;

const OptionTitle = styled.h2`
  font-size: 1.125rem;
  font-family: Noto Sans KR Thin;
`;

const SelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  font-family: Noto Sans KR Thin;
  margin: 1.0rem 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.0rem 0;
`;

const PriceTitle = styled.h2`
  font-size: 1.125rem;
  font-family: Noto Sans KR Thin;
`;

const Price = styled.h2`
  font-size: 1.56rem;
  font-family: Noto Sans KR Regular;
`;

const PayWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
`;

const Button = styled('button')<{color?: string}>`
  width: 49%;
  display: flex;
  margin: 0.25rem;
  padding: 0.875rem 2.75rem;
  background-color: ${(props) => props.color === 'black' ? '#000000' : '#ffffff'};
  color: ${(props) => props.color === 'black' ? '#ffffff' : '#25262b'};
  ${(props) => props.color || `border: solid 1px #929295;`};
  font-size: 1.125rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
`;

const DelButton = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  font-size: 0.625rem;
  border: solid 1px #b6b6b6;
  background-color: #ffffff;
  color: #b6b6b6;
  margin-left: 0.625rem;
`;
