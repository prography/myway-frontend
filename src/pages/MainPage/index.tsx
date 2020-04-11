import React from 'react';
import { LayoutHOC } from 'components/Layout';
import Container from 'components/Layout/Container';
import Slide from 'components/Slide';
import {
  PlayerContainer,
  Section,
  SectionTitle,
  SliderViewer,
  FeatureWrap,
  MapSectionTitle,
  PartnerApply,
  FloatingBar,
  ApplyButton,
  Enroll,
  EnrollButton,
  PartnerSectionTitle,
  PartnerDesc,
  PartnerEnroll,
  PartnerEnrollButton,
} from './style';
import '../../styles/color.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Icon1 from 'assets/images/icon_1.png';
import Icon2 from 'assets/images/icon_2.png';
import Icon3 from 'assets/images/icon_3.png';

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
      <Section id="slide-section">
        <Container>
          <SectionTitle>
            1시간 1000원으로 <br />
            <span className="highlight orange">강남역 핫한 인스타 카페</span>에 내
            광고가 뜬다면?
          </SectionTitle>
          <SliderViewer>
            <Slide>
              <div className="slide-image">
                <img
                  src="https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1299&q=80"
                  alt=""
                />
              </div>
              <div className="slide-image"></div>
              <div className="slide-image"></div>
              <div className="slide-image"></div>
            </Slide>
          </SliderViewer>
        </Container>
      </Section>
      <Section id="feature-section">
        <Container>
          <SectionTitle>
            지금까지 <span className="highlight orange">32,500명</span>이 마이웨이를
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
      <Section id="map-section">
        <div></div>
        <div className="map-detail-view">
          <MapSectionTitle color="light" align="left">
            내 광고, 어디에 하면 좋을까요?
            <br />
            <span className="highlight orange">
              지금 바로 광고가 가능한
              <br />
              우리 동네 가게
            </span>
            를 찾아보세요!
          </MapSectionTitle>
          <PartnerApply>
            <span>내 가게가 안 보이나요?</span>
            <a href="#">
              <span>파트너 신청하기</span> <ArrowForwardIcon />
            </a>
          </PartnerApply>
        </div>
      </Section>
      <Section id="enroll-section">
        <div className="enroll-detail-view">
          <SectionTitle align="left">
            마이웨이를 이용해서
            <br />
            <span className="highlight">내 가게를 쉽고 간편하게</span>
            <br />
            홍보해 보세요!
          </SectionTitle>
          <Enroll>
            <EnrollButton>광고 등록하기</EnrollButton>
          </Enroll>
        </div>
        <div className="enroll-image">
          <img
            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </Section>
      <Section id="partner-enroll-section">
        <div className="partner-detail-view">
          <PartnerSectionTitle color="light" align="left">
            파트너 신청하기
          </PartnerSectionTitle>
          <PartnerDesc>
            <span>초기비용 없이! 32인치 벽면 공간 빌려주고 수익 창출 하러가기</span>
          </PartnerDesc>
        </div>
        <PartnerEnroll>
          <PartnerEnrollButton>등록하러 가기</PartnerEnrollButton>
        </PartnerEnroll>
      </Section>
      <FloatingBar>
        <p>단! 10분만에 완성하는 쉽고 간단한 광고 등록하기</p>
        <ApplyButton>광고 등록하기</ApplyButton>
      </FloatingBar>
    </>
  );
};

export default LayoutHOC(MainPage);