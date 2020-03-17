import React from 'react';
import styled from 'styled-components';
import { LayoutHOC } from 'components/Layout';

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

const FloatingBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #333;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.05rem;
    color: #fff;
    margin-right: 1rem;
  }
`;

const ApplyButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.palette.mainColor};
  color: #fff;
  border-radius: 20px;
  font-weight: bold;
`;

const Section = styled.div`
  width: 100%;
  padding: 6.25rem 0;

  h2.section-title {
    color: #666;
    font-size: 2rem;
    text-align: center;
    font-weight: 400;

    span.highlight {
      color: ${props => props.theme.palette.mainColor};
      font-weight: bold;
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
        <h2 className="section-title">
          1시간 1,000원으로 <br /><span className="highlight">강남역 핫한 인스타 카페</span>에 내 광고가 뜬다면?
        </h2>
      </Section>
      <FloatingBar>
        <p>단! 10분만에 완성하는 쉽고 간단한 광고 등록하기</p>
        <ApplyButton>광고 등록하기</ApplyButton>
      </FloatingBar>
    </>
  )
}

export default LayoutHOC(MainPage);
