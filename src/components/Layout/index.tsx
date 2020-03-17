import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const ContentWrap = styled.div`
  position: relative;
  width: 100%;
`;

export function LayoutHOC(Page: React.ComponentType) {
  return () => (
    <ContentWrap>
      <Header />
      <Page />
    </ContentWrap>
  );
};