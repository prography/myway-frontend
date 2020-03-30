import React from 'react';
import styled from 'styled-components';
import { LayoutHOC } from 'components/Layout';
import Container from 'components/Layout/Container';
import Slide from 'components/Slide';

import Icon1 from 'assets/images/icon_1.png';
import Icon2 from 'assets/images/icon_2.png';
import Icon3 from 'assets/images/icon_3.png';

type SectionProps = {
  background?: 'gray' | 'dark';
};

type SectionTitleProps = {
  color?: 'light' | 'dark';
};

/**
 * 섹션 컴포넌트
 */
const Section = styled.div`
  width: 100%;
  padding: 8.8125rem 0;

  /* props 값에 따라 백그라운드 변경 */
  ${(props: SectionProps) => {
    let backgroundColor;

    if (props.background === 'gray') {
      backgroundColor = '#f2f2f2';
    } else if (props.background === 'dark') {
      backgroundColor = '#232328';
    } else {
      backgroundColor = '#ffffff';
    }

    return `background-color: ${backgroundColor};`;
  }}
`;

/**
 * 섹션 타이틀 컴포넌트
 */
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  font-family: Noto Sans KR Light;
  font-weight: 300;
  font-stretch: normal;
  letter-spacing: -2.4px;
  margin-bottom: 3.1875rem;
  line-height: 1.5;
  color: ${(props: SectionTitleProps) =>
    props.color === 'light' ? '#fff' : '#101010'};

  /* 색상 하이라이트  */
  span.highlight {
    font-family: Noto Sans KR Medium;
    color: ${props => props.theme.palette.mainColor};
  }
`;

/**
 * 동영상 플레이어 컨테이너
 */
const PlayerContainer = styled.div`
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
const FloatingBar = styled.div`
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
const ApplyButton = styled.button`
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.407rem 1.269rem;
  background-color: ${props => props.theme.palette.mainColor};
  border-radius: 20px;
  color: #fff;
`;

const SliderViewer = styled.div`
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
const FeatureWrap = styled.div`
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

const MainPage = () => {
  return (
    <>
      <PlayerContainer>
        <iframe
          title="player"
          id="projectplayer"
          frameBorder="0"
          src="https://player.vimeo.com/video/377707179?api=1&amp;background=1&amp;mute=1&amp;loop=1&amp;autoplay=1"
        />
      </PlayerContainer>
      <Section>
        <Container>
          <SectionTitle>
            1시간 1000원으로 <br />
            <span className="highlight">강남역 핫한 인스타 카페</span>에 내
            광고가 뜬다면?
          </SectionTitle>
          <SliderViewer>
            <Slide>
              <div className="slide-section">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2467&q=80"
                  alt=""
                />
              </div>
              <div className="slide-section"></div>
              <div className="slide-section"></div>
            </Slide>
          </SliderViewer>
        </Container>
      </Section>
      <Section background="gray">
        <Container>
          <SectionTitle>
            지금까지 <span className="highlight">32,500명</span>이 마이웨이를
            이용해서 <br />
            우리 동네에 광고를 하고 있어요!
          </SectionTitle>
          <FeatureWrap>
            <div className="featureList">
              <div className="featureItem">
                <img src={Icon1} alt="feature1" />
                <p>
                  전화 없이, 클릭 몇 번으로
                  <br />
                  신청하는 광고
                </p>
              </div>
              <div className="featureItem">
                <img src={Icon2} alt="feature2" />
                <p>
                  한 시간도 OK!
                  <br />
                  합리적 비용의 광고
                </p>
              </div>
              <div className="featureItem">
                <img src={Icon3} alt="feature3" />
                <p>
                  원하는 장소, 원하는 시간에
                  <br />
                  신청하는 맞춤 광고
                </p>
              </div>
            </div>
          </FeatureWrap>
        </Container>
      </Section>
      <Section background="dark">
        <Container>
          <SectionTitle color="light">
            내 광고, 어디에 하면 좋을까요?
            <br />
            <span className="highlight">
              지금 바로 광고가 가능한 우리 동네 가게
            </span>
            를 찾아보세요!
          </SectionTitle>
        </Container>
      </Section>
      <FloatingBar>
        <p>단! 10분만에 완성하는 쉽고 간단한 광고 등록하기</p>
        <ApplyButton>광고 등록하기</ApplyButton>
      </FloatingBar>
    </>
  );
};

export default LayoutHOC(MainPage);
