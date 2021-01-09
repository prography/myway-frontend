import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import Container from 'components/Layout/Container';
import { Table } from 'antd';

import CartHelper from 'utils/cart';
import useCartInfo from 'hooks/useCartInfo';
import { Partner } from 'models/partner';

import 'antd/dist/antd.css';

const columns = [
  {
    title: '가게정보',
    dataIndex: 'partnerInfo',
    key: 'partnerInfo',
    render: (partnerInfo: any) => (
      <PartnerInfoContainer>
        <StyledImage src={partnerInfo.imgUrl} />
        <PartnerInfo>
          <PartnerStoreName>{partnerInfo.name}</PartnerStoreName>
          <PartnerStoreDetail>{partnerInfo.address}</PartnerStoreDetail>
          <PartnerStoreDetail>{partnerInfo.pricePerHour}원 / 시간</PartnerStoreDetail>
        </PartnerInfo>
      </PartnerInfoContainer>
    ),
  },
  {
    title: '주문정보',
    dataIndex: 'adTimeInfo',
    key: 'adTimeInfo',
    render: (adTimeInfo: any) => (
      <>
        {adTimeInfo.map((time: any, i: number) => (
          <p key={i}>
            {time.adDate} | {time.adHour}시 ~ {time.adHour + 1}시
          </p>
        ))}
      </>
    ),
  },
];

// type Time = {
//   adDate: string;
//   adHour: number;
//   id: number;
// };

// type Row = {
//   partnerInfo: {
//     partnerImgUrl: string;
//     partnerStoreName: string;
//   },
//   partnerInfo: Partner;
//   adTimeInfo: Time[];
// };

const CartPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [payInfo, setPayInfo] = useState<any[]>([]);
  const [redirect, setRedirect] = useState(false);
  const cartInfo = useCartInfo(CartHelper.cartList);

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    const items: any[] = [];
    cartInfo.forEach((item: any) => {
      if (selectedRowKeys.includes(item.partnerInfo.id)) {
        const id: number[] = [];
        item.adTimeInfo.forEach((i: any) => {
          id.push(i.id);
        });
        items.push({ partnerInfo: item.partnerInfo, timeList: id });
      };
    });
    setPayInfo(items);
  }, [selectedRowKeys]);

  const handleGoPay = () => {
    if (selectedRowKeys.length === 0) {
      window.alert('결제할 상품을 선택해주세요 !');
      return;
    }
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect to={{
        pathname: '/orderForm',
        state: { payInfo },
      }}
      />
    );
  }

  return (
    <PlacesWrapper>
      <PageTitle>장바구니</PageTitle>
      <Container>
        <Table
          pagination={false}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={cartInfo}
          rowKey={(record) => record.partnerInfo.id}
        />
        <StyledButton onClick={handleGoPay}>결제하기</StyledButton>
      </Container>
    </PlacesWrapper>
  );
};

export default CartPage;

const PlacesWrapper = styled.div`
  padding: 6.25rem 0;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Thin;
  text-align: center;
  margin-bottom: 1.875rem;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const PartnerInfoContainer = styled.div`
  display: flex;
`;

const PartnerInfo = styled.div`
  padding-left: 14px;
`;

const PartnerStoreName = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const PartnerStoreDetail = styled.h3`
  font-size: 15px;
`;

const StyledButton = styled.button`
  width: 200px;
  color: #fff;
  background-color: ${(props) => props.theme.palette.mainColor};
  padding: 12px;
  margin-top: 10px;
  float: right;
`;
