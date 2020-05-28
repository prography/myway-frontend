import React from 'react';
import styled from 'styled-components';

const PartnerDetailPopup: React.FC<{ address: string }> = React.memo(
  ({ address }) => {
    return (
      <Box>
        <BoxTop>
          <p>{address}</p>
          <a
            href={`https://map.naver.com/v5/search/${address}`}
            target="_blank"
          >
            큰 지도 보기
          </a>
        </BoxTop>
      </Box>
    );
  },
);

export default PartnerDetailPopup;

const Box = styled.div`
  box-shadow: 0 0 26.7px 2.3px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  padding: 12px;
  font-size: 1rem;

  p {
    width: 265px;
    margin-right: 30px;
  }

  a {
    color: #619de5;
    font-size: 14px;
  }
`;

const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
