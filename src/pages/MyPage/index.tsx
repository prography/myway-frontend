import React from 'react';
import styled from 'styled-components';
import useMyOrder from 'hooks/useMyOrder';
import Container from 'components/Layout/Container';
import { getOrderState } from 'constant/order';

const MyPage = () => {
  const orders = useMyOrder();

  return (
    <div>
      <PlacesWrapper>
        <PageTitle>MY PAGE</PageTitle>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>주문일</th>
                <th>주문번호</th>
                <th>공간정보</th>
                <th>시간</th>
                <th>주문금액</th>
                <th>진행상황</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map(
                  ({ id, createdAt, adTimeTables, paidAmount, adStatus }) => {
                    const placeName = adTimeTables[0]?.partnerInfo?.store_name;
                    const placeLength = new Set(
                      adTimeTables.map((adTime) => {
                        return adTime.partnerInfo.id;
                      }),
                    ).size;

                    const time = adTimeTables[0]?.adHour
                      ? `${adTimeTables[0]?.adHour}:00 ~ ${
                          adTimeTables[0]?.adHour + 1
                        }:00`
                      : '';

                    return (
                      <tr key={id}>
                        <td>{createdAt}</td>
                        <td>{id}</td>
                        <td>
                          {placeName}{' '}
                          {placeLength > 1 ? `외 ${placeLength - 1}개` : ''}
                        </td>
                        <td>
                          {time}{' '}
                          {adTimeTables.length > 1
                            ? `외 ${adTimeTables.length - 1}건`
                            : ''}
                        </td>
                        <td>{paidAmount.toLocaleString()}원</td>
                        <td>{getOrderState(adStatus)}</td>
                      </tr>
                    );
                  },
                )}
            </tbody>
          </Table>
        </Container>
      </PlacesWrapper>
    </div>
  );
};

export default MyPage;

const PlacesWrapper = styled.div`
  padding: 6.25rem 0;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Thin;
  text-align: center;
  margin-bottom: 1.875rem;
`;

const Table = styled.table`
  width: 100%;
  border-top: 2px solid #25262b;
  border-bottom: 2px solid #25262b;

  th,
  td {
    border-bottom: 1px solid #bbbbbb;
    padding: 34px 0;
    text-align: center;
    white-space: pre-line;
  }
`;
