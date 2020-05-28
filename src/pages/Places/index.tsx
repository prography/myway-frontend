import React, { useState } from 'react';
import styled from 'styled-components';
import usePartner from 'hooks/usePartner';
import { Partner } from 'models/partner';

import Container from 'components/Layout/Container';
import NaverMap from 'components/NaverMap';
import PlaceCard from './PlaceCard';

import CafeImageSample from 'assets/images/sec5-img.jpg';

const Places = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const partners = usePartner();

  return (
    <PlacesWrapper>
      <PageTitle>COPL ZONE</PageTitle>
      <MapWrapper>
        <NaverMap placeList={partners} setPartner={setSelectedPartner} />
      </MapWrapper>
      <Container>
        <TierContainer>
          <PlaceCountLabel>{partners.length}개의 공간</PlaceCountLabel>
        </TierContainer>
        <PlaceCardContainer>
          {partners.map((data, idx) => (
            <PlaceCardWrapper key={data.id}>
              <PlaceCard
                placeName={data.name}
                placeAddress={data.address}
                placeTel="02-1234-5678"
                placePrice={1000}
                placeThumbnailUrl={idx % 2 === 0 ? CafeImageSample : undefined}
              />
            </PlaceCardWrapper>
          ))}
        </PlaceCardContainer>
      </Container>
    </PlacesWrapper>
  );
};

export default Places;

const PlacesWrapper = styled.div`
  padding: 6.25rem 0;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 360px;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Thin;
  text-align: center;
  margin-bottom: 1.875rem;
`;

const TierContainer = styled.div`
  padding: 5.5rem 0 2.9rem;
  display: flex;
  align-items: center;
`;

const PlaceCountLabel = styled.p`
  font-size: 1.125rem;
  font-family: Noto Sans KR Medium;
`;

const PlaceCardWrapper = styled.div`
  width: 33.3333%;
  padding: 0 0.625rem;
  flex: 0 0 auto;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PlaceCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.625rem;
`;