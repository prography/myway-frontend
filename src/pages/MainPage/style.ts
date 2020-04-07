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
`;

/**
 * 섹션 타이틀 컴포넌트
 */
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Light;
  font-weight: 300;
  font-stretch: normal;
  letter-spacing: -2.4px;
  margin-bottom: 3.1875rem;
  line-height: 1.5;
  text-align: ${(props: SectionTitleProps) => props.align || 'center'};
  color: ${(props: SectionTitleProps) =>
    props.color === 'light' ? '#fff' : '#101010'};

  /* 색상 하이라이트  */
  span.highlight {
    font-family: Noto Sans KR Medium;
    color: ${(props) => props.theme.palette.mainColor};
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

  .slide-section {
    position: relative;
    padding-bottom: 34.375rem;
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
