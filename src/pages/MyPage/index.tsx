import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { DatePicker } from 'antd'
import moment from 'moment';
import Container from 'components/Layout/Container';
import MypageTable from './MypageTable';
import { getReservationInfo } from 'store/mypage/action';

import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const MyPage = (props : any) => {
  const dispatch = useDispatch();
  const adReservationInfo = useSelector(
    (state: StoreState) => state.mypage.getReservationInfo.items.adReservationInfo
  );
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.me.isLoggedIn,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!props.location.state?.reservationId) return;
    dispatch(
      getReservationInfo(props.location.state?.reservationId)
    );
  }, []);

  if (!isLoggedIn) {
    window.alert('로그인을 먼저 해주세요 !');
    return (
      <Redirect to={'/login'}
      />
    );
  }

  return(
      <PlacesWrapper>
      <PageTitle>MY PAGE</PageTitle>
      <PageOrder>HOME &gt; MY PAGE</PageOrder>
      <Container>
        <CalendarContainer>
          <RangePicker
            defaultValue={[moment('2020/01/01', dateFormat), moment('2020/12/31', dateFormat)]}
            format={dateFormat}
            placeholder={["start", "end"]}
          />
          <ExploreButton>조회</ExploreButton>
        </CalendarContainer>
        <TableTitle>최근 주문 내역</TableTitle>
        <MypageTable info={adReservationInfo} />
      </Container>
      </PlacesWrapper>
  )
}

export default MyPage;

const PlacesWrapper = styled.div`
  padding: 6.25rem 0;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Thin;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const PageOrder = styled.h4`
  font-size: 1.25rem;
  font-family: Noto Sans KR Thin;
  text-align: center;
  margin-bottom: 2rem;
`

const CalendarContainer = styled.div`
  padding: 1rem 0 1rem;
  margin:0 auto;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #dcdcdc;
`;

const ExploreButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin:0 auto;
  margin-left: 15px;
  background-color: ${(props) => props.theme.palette.mainColor};
  border-radius: 10px;
  color: #fff;
`;

const TableTitle = styled.h5`
  font-size: 1.25rem;
  font-family: Noto Sans KR Thin;
  text-align: left;
  margin-bottom: 0.5rem;
`;
