import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Layout/Container';
import { Table } from 'antd';

import CartHelper from 'utils/cart';
import useCartInfo from 'hooks/useCartInfo';

import 'antd/dist/antd.css';

const columns = [
  {
    title: '가게정보',
    dataIndex: 'partnerInfo',
    key: 'partnerInfo',
    render: (partnerInfo: any) => (
      <PartnerInfoContainer>
        <StyledImage src={partnerInfo.partnerImgUrl} />
        <PartnerInfo>
          <PartnerStoreName>{partnerInfo.partnerStoreName}</PartnerStoreName>
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

const CartPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const cartInfo = useCartInfo(CartHelper.cartList);

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <PlacesWrapper>
      <PageTitle>장바구니</PageTitle>
      <Container>
        <Table
          pagination={false}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={cartInfo}
          rowKey={(record) => record}
        />
        <StyledButton>결제하기</StyledButton>
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

const StyledButton = styled.button`
  width: 200px;
  color: #fff;
  background-color: ${(props) => props.theme.palette.mainColor};
  padding: 12px;
  margin-top: 10px;
  float: right;
`;
