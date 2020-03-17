import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const CotainerWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function Container({ children }: Props) {
  return (
    <CotainerWrap>
      {children}
    </CotainerWrap>
  );
}

export default Container;
