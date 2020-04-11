import styled from 'styled-components';

type SectionTitleProps = {
  color?: 'light' | 'dark';
  align?: 'center' | 'left' | 'right';
};

/**
 * 섹션 컴포넌트
 */
export const Section = styled.div`
  width: 100%;
  padding: 8.8125rem 0;

  &#slide-section {
    background-color: #ffffff;
  }

  &#feature-section {
    background-color: #f2f2f2;
  }

  &#map-section {
    display: flex;
    justify-content: space-between;
    padding: 0;
    background-color: #232328;

    & > div {
      width: 50%;
      background-color: #232328;

      &:first-child {
        border-right: 1px solid #fff;
      }
    }

    .map-detail-view {
      padding: 12.1875rem 5.25rem;
    }
  }

  &#enroll-section {
    display: flex;
    background-color: #ffffff;
    width: 100%;

    .enroll-detail-view {
      width: 40%;
      padding: 9.5875rem 3.775rem;
      margin-left: 8.8125rem;
    }

    .enroll-image {
      width: 60%;

      img {
        width: 70%;
        height: 70%;
        margin: 6.1875rem 0.725rem;
        transform: scale(1);
        object-fit: cover;
      }
    }
  }

  &#partner-enroll-section {
    display: flex;
    background-color: #0a0a32;
    padding: 6.8125rem 0;

    .partner-detail-view {
      margin-left: 10.7rem;
      width: 50%;
    }
  }
`;

/**
 * 섹션 타이틀 컴포넌트
 */
export const SectionTitle = styled('h2')<SectionTitleProps>`
  font-size: 2.5rem;
  font-family: Noto Sans KR Light;
  font-weight: 300;
  font-stretch: normal;
  letter-spacing: -2.4px;
  margin-bottom: 3.1875rem;
  line-height: 1.5;
  text-align: ${(props) => props.align || 'center'};
  color: ${(props) =>
    props.color === 'light' ? '#fff' : '#101010'};

  /* 색상 하이라이트  */
  span.highlight {
    font-family: Noto Sans KR Medium;
  }
`;

/**
 * 동영상 플레이어 컨테이너
 */
export const PlayerContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  max-width: 100%;
  border-bottom: 1px solid #efefef;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

/**
 * 하단 고정 바
 */
export const FloatingBar = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232328;

  p {
    color: #fff;
    font-size: 1.125rem;
    margin-right: 1.5rem;
  }
`;

/**
 * 신청 버튼
 */
export const ApplyButton = styled.button`
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.407rem 1.269rem;
  background-color: ${(props) => props.theme.palette.mainColor};
  border-radius: 20px;
  color: #fff;
`;

export const SliderViewer = styled.div`
  width: 100%;

  .slide-image {
    position: relative;
    padding-bottom: 50%;
    overflow: hidden;
    background: #333;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(1);
      object-fit: cover;
    }
  }
`;

/**
 * 마이웨이 특징 3가지
 */
export const FeatureWrap = styled.div`
  width: 100%;
  padding: 0 10.6875rem;

  .featureList {
    display: flex;
    justify-content: space-between;

    .featureItem {
      display: flex;
      align-items: center;
      flex-direction: column;

      img {
        display: block;
        margin-bottom: 1.3125rem;
      }

      p {
        text-align: center;
        font-size: 1.375rem;
        line-height: 1.36;
        letter-spacing: -1.32px;
        color: #101010;
      }
    }
  }
`;

export const MapSectionTitle = styled(SectionTitle)`
  margin-bottom: 20.8125rem;
`;

export const PartnerApply = styled.div`
  & > span {
    display: block;
    font-size: 1.125rem;
    color: #85859c;
  }

  a {
    display: flex;
    align-items: center;
    color: #ffffff;

    span {
      font-size: 1.375rem;
      color: #ffffff;
      margin-right: 5px;
    }
  }
`;

export const Enroll = styled.div`
  margin-left: 0.7rem;
`;

/**
 * 광고 등록하기 버튼
 */
export const EnrollButton = styled(ApplyButton)`
  font-size: 1.325rem;
  font-weight: 500;
  padding: 1.007rem 3.469rem;
  border-radius: 35px;
`;

export const PartnerSectionTitle = styled(SectionTitle)`
  margin: 0;
  padding-bottom: 0.7rem;
  font-size: 2.0rem;
  font-family: Noto Sans KR Medium;
`;

export const PartnerDesc = styled.div`

  span {
    color: #6a6acc;
    font-size: 1.2rem;
  }
`;

export const PartnerEnroll = styled.div`
  padding: 0 6.7rem;
  
`;

/**
 * 파트너 신청 - 등록하러 가기 버튼
 */
export const PartnerEnrollButton = styled(EnrollButton)`
  background-color: #243d87;
  padding: 0.895rem 3.469rem;
  margin-top: 0.62rem;
  border-radius: 55px;
`;