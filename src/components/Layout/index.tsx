import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
  position: relative;
  width: 100%;
`;

export function LayoutHOC(Page: React.ComponentType) {
  return () => (
    <ContentWrap>
      <Page />
    </ContentWrap>
  );
}
