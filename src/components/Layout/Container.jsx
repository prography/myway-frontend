import React from 'react';
import styled from 'styled-components';

const CotainerWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return (
    <CotainerWrap>
      {children}
    </CotainerWrap>
  )
}

export default Container
