import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPartnerDetail } from 'store/partner/action';
import TimeSelect from './TimeSelect';
import DetailPicture from './DetailPicture';
import CartHelper from 'utils/cart';

interface MatchParams {
  id: string;
}

type ListItem = {
  partnerId: number;
  date: string;
  time: number;
};

type CartItem = {
  partnerId: number;
  adTimeIds: number[];
};

const Detail: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(-1);
  const [list, setList] = useState<ListItem[]>([]);
  const [availId, setAvailId] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem>({
    partnerId: parseInt(match.params.id),
    adTimeIds: [],
  });

  const dispatch = useDispatch();
  const detailInfo = useSelector(
    (state: StoreState) => state.partner.partnerDetail.item,
  );

  useEffect(() => {
    dispatch(getPartnerDetail(parseInt(match.params.id)));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (time === -1) return;
    const newItem: ListItem = {
      partnerId: parseInt(match.params.id),
      date,
      time,
    };
    setList([...list, newItem]);
  }, [time]);

  useEffect(() => {
    setCart({ ...cart, ['adTimeIds']: availId });
  }, [availId]);

  const handleCheckSelected = (id: number) => {
    if (availId.some((item) => item === id)) {
      window.alert('이미 선택된 옵션입니다 !');
      return false;
    }
    return true;
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    const check = handleCheckSelected(
      JSON.parse(e.currentTarget.value).availId,
    );
    if (check) {
      setTime(JSON.parse(e.currentTarget.value).adHour);
      setAvailId([...availId, JSON.parse(e.currentTarget.value).availId]);
    }
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    setList(
      list.filter(
        (item, idx) => idx !== parseInt(e.currentTarget.dataset.id || ''),
      ),
    );
    setAvailId(
      availId.filter(
        (item, idx) => idx !== parseInt(e.currentTarget.dataset.id || ''),
      ),
    );
  };

  const handleAddCart = () => {
    if (list.length === 0) {
      window.alert('상품을 선택해주세요 !');
      return;
    }

    CartHelper.addCart(cart);
    window.alert(`${list.length}개의 상품이 장바구니에 담겼습니다 !`);
  };

  return (
    <DetailContainer>
      <PageTitle>HOME > COPL ZONE > 가게 상세</PageTitle>
      <DetailWrapper>
        <PictureWrapper>
          <DetailPicture imgUrl={detailInfo.imgUrl} />
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
              value={date}
              min={new Date().toISOString().split('T', 1).toString()}
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
          {list.length > 0 && <ThinHr />}
          {list.map((item, idx) => (
            <SelectionWrapper key={idx}>
              <div>선택 {idx + 1}</div>
              <div>
                {detailInfo.name} / {item.date} / {item.time}:00 ~{' '}
                {item.time + 1}:00
                <DelButton data-id={idx} onClick={handleDelete}>
                  X
                </DelButton>
              </div>
            </SelectionWrapper>
          ))}
          <ThinHr />
          <PriceWrapper>
            <PriceTitle>총 결제금액</PriceTitle>
            <Price>
              {(list.length * detailInfo.pricePerHour).toLocaleString()}원 (
              {list.length}시간){' '}
            </Price>
          </PriceWrapper>
          <ThinHr />
          <PayWrapper>
            <Button onClick={handleAddCart}>장바구니 담기</Button>
            <Button color="black" disabled={!cart.adTimeIds.length}>
              {cart.adTimeIds.length ? (
                <Link
                  to={{
                    pathname: '/orderForm',
                    state: {
                      payInfo: [{
                        partnerInfo: detailInfo,
                        timeList: cart.adTimeIds,
                      }],
                    },
                  }}
                  style={{ color: '#ffffff' }}
                >
                  바로 구매하기
                </Link>
              ) : (
                  '바로 구매하기'
                )}
            </Button>
          </PayWrapper>
          <Hr />
        </InfoWrapper>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default React.memo(Detail);

const DetailContainer = styled.div`
  padding: 6.25rem 7.25rem;

  @media screen and (max-width: 768px) {
    padding: 6.25rem 1.25rem;
  }
`;

const PageTitle = styled.h2`
  font-size: 0.875rem;
  font-family: NotoSansCJKkr-DemiLight;
  color: #101010;
  text-align: left;
  margin-bottom: 1.56rem;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const PictureWrapper = styled.div`
  width: 48%;
  height: 850px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 600px;
  }
`;

const InfoWrapper = styled.div`
  width: 48%;
  height: 850px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 600px;
  }
`;

const PartnerName = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Light;
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
  margin: 1rem 0;
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
  margin: 1rem 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
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

const Button = styled('button') <{ color?: string }>`
  width: 49%;
  display: flex;
  margin: 0.25rem;
  padding: 0.875rem 2.75rem;
  background-color: ${(props) =>
    props.color === 'black' ? '#000000' : '#ffffff'};
  color: ${(props) => (props.color === 'black' ? '#ffffff' : '#25262b')};
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
