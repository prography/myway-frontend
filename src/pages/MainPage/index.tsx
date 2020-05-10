import React from 'react';
import { LayoutHOC } from 'components/Layout';
import Container from 'components/Layout/Container';
import Slide from 'components/Slide';
import PartnerMapSection from './PartnerMapSection';
import {
  Section,
  SectionTitle,
  SliderViewer,
  FeatureWrap,
  FloatingBar,
  ApplyButton,
  EnrollButton,
  PartnerSectionTitle,
  PartnerDesc,
  PartnerEnrollButton,
} from './style';

import Icon1 from 'assets/images/icon_1.png';
import Icon2 from 'assets/images/icon_2.png';
import Icon3 from 'assets/images/icon_3.png';

import SlideImage from 'assets/images/img_01.jpg';
import Sec5Image from 'assets/images/sec5-img.jpg';
import SpinCopl from 'assets/images/spin-copl.png';

const MainPage = () => {
  return (
    <>
      <Section id="main-section">
        <Container>
          <SectionTitle align="left" color="light">
            나만을 위한 광고,
            <br /> 지금 바로 등록해보세요
            <br /> COPL에서 빠르고 간편하게
          </SectionTitle>
        </Container>
      </Section>
      <Section id="slide-section">
        <Container>
          <SectionTitle>
            1시간 1000원으로 <br />
            <span className="highlight text-orange">
              강남역 핫한 인스타 카페
            </span>
            에 내 광고가 뜬다면?
          </SectionTitle>
          <SliderViewer>
            <Slide>
              <div className="slide-image">
                <img src={SlideImage} alt="slide_1" />
              </div>
              <div className="slide-image">
                <img src={SlideImage} alt="slide_2" />
              </div>
              <div className="slide-image">
                <img src={SlideImage} alt="slide_3" />
              </div>
              <div className="slide-image">
                <img src={SlideImage} alt="slide_4" />
              </div>
            </Slide>
          </SliderViewer>
        </Container>
      </Section>
      <Section id="feature-section">
        <Container>
          <SectionTitle>
            지금까지 <span className="highlight text-orange">32,500명</span>이
            마이웨이를 이용해서 <br />
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
      <PartnerMapSection />
      <Section id="enroll-section">
        <Container>
          <div className="enroll-detail-view">
            <SectionTitle align="left">
              마이웨이를 이용해서
              <br />
              <span className="highlight">내 가게를 쉽고 간편하게</span>
              <br />
              홍보해 보세요!
            </SectionTitle>
            <EnrollButton>광고 등록하기</EnrollButton>
          </div>
          <div className="enroll-image">
            <div className="enroll-pic">
              <img src={Sec5Image} alt="sec5-img" />
            </div>
            <div className="spin-image">
              <img src={SpinCopl} alt="spin-copl" />
            </div>
            <div className="shadow" />
          </div>
        </Container>
      </Section>
      <Section id="partner-enroll-section">
        <Container>
          <div className="partner-view">
            <div className="partner-detail-view">
              <PartnerSectionTitle color="light" align="left">
                파트너 신청하기
              </PartnerSectionTitle>
              <PartnerDesc>
                <span>
                  초기비용 없이! 32인치 벽면 공간 빌려주고 수익 창출 하러가기
                </span>
              </PartnerDesc>
            </div>
            <div>
              <PartnerEnrollButton>등록하러 가기</PartnerEnrollButton>
            </div>
          </div>
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
