import React from 'react';
import styled from 'styled-components';

type Props = {
  imgUrl: string;
}

const DetailPicture: React.FC<Props> = ({ imgUrl }) => {

  return (
    <PictureWrapper>
      <MainPic url={imgUrl} />
      <SubPicWrapper>
        <SubPic url={imgUrl} />
        <SubPic url={imgUrl} />
        <SubPic />
        <SubPic />
      </SubPicWrapper>
    </PictureWrapper>
  );
};

export default React.memo(DetailPicture);

const PictureWrapper = styled.div`
  width: 100%;
`;

const MainPic = styled('div')<{url?: string}>`
  width: 100%;
  height: 600px;
  ${(props) => props.url ? `background-image: url(${props.url});` :  `background-color: #dbdbdb;`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 0.8rem;
  position: relative;
  padding-bottom: 50%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

const SubPicWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubPic = styled('div')<{url?: string}>`
  width: 24%;
  height: 140px;
  ${(props) => props.url ? `background-image: url(${props.url});` :  `background-color: #dbdbdb;`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;