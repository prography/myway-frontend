import React from 'react';
import { LayoutHOC } from 'components/Layout';
import styled from 'styled-components';

const PageWrap = styled.div`
  position: relative;
`;

const Player = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  max-width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Floating = styled.div`
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

  .apply-btn-container {
    button.apply-btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      background-color: #a5eef2;
      color: #333;
      border-radius: 20px;
      font-weight: bold;
    }
  }

  
`;

const MainPage = () => {
  return (
    <PageWrap>
      <Player>
        <iframe 
          title="player" 
          id="projectplayer" 
          frameBorder="0" 
          src="https://player.vimeo.com/video/377707179?api=1&amp;background=1&amp;mute=1&amp;loop=1&amp;autoplay=1" 
        />
      </Player>
      <Floating>
        <p>월 10만 원 대로 할 수 있는 핫플 광고, 직접 확인하세요!</p>
        <div className="apply-btn-container">
          <button type="button" className="apply-btn">광고 신청하기</button>
        </div>
      </Floating>
    </PageWrap>
  )
}

export default LayoutHOC(MainPage);
