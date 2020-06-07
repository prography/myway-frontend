import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const CotainerWrap = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;

  @media screen and (max-width: 1440px) {
    padding: 0 3rem;
    max-width: 100%;
  }
`;

function Container({ children }: Props) {
  return <CotainerWrap>{children}</CotainerWrap>;
}

export default Container;
