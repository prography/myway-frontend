import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  placeName: string;
  placeAddress: string;
  placeTel: string;
  placePrice: number;
  placeThumbnailUrl?: string;
};

const PlaceCard: React.FC<PlaceCardProps> = ({
  placeName,
  placeAddress,
  placePrice,
  placeTel,
  placeThumbnailUrl,
}) => {
  const PlaceThumbnail = useMemo(() => {
    if (!placeThumbnailUrl) {
      return <PlaceNoneThumbnail>{placeName}</PlaceNoneThumbnail>;
    }

    return <img src={placeThumbnailUrl} alt="thumbnail" />;
  }, [placeThumbnailUrl]);

  return (
    <CardContainer>
      <Link to="#">
        <PlaceImageWrap>
          <span>{PlaceThumbnail}</span>
        </PlaceImageWrap>
        <PlaceInfoWrap>
          <PlaceLabelBold>{placeName}</PlaceLabelBold>
          <PlaceLabelThin>{placeAddress}</PlaceLabelThin>
          <PlaceLabelThin>{placeTel}</PlaceLabelThin>
          <PlacePrice>{placePrice}원 / 시간</PlacePrice>
        </PlaceInfoWrap>
      </Link>
    </CardContainer>
  );
};

export default memo(PlaceCard);

const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;

  a {
    display: block;
  }

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 51px 9px rgba(0, 0, 0, 0.05);
  }
`;

const PlaceImageWrap = styled.div`
  span {
    position: relative;
    display: block;
    width: 100%;
    padding-bottom: 81%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const PlaceInfoWrap = styled.div`
  padding: 1.875rem;
  color: #101010;
`;

const PlaceLabelBold = styled.h3`
  font-family: Noto Sans KR Medium;
  font-size: 1.375rem;
  margin-bottom: 0.6875rem;
`;

const PlaceLabelThin = styled.p`
  font-size: 1.125rem;
`;

const PlacePrice = styled(PlaceLabelBold)`
  margin-top: 1.5rem;
`;

const PlaceNoneThumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dbdbdb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
