import React from 'react';
import {
  Container,
  Form,
  Title,
  DetailTitle,
  Input,
  CheckBox,
  CheckLabel,
  CheckTitle,
  Button,
  Hr,
} from './style';

const Join = () => {

  return(
    <Container>
      <Form>
        <Title>회원가입</Title>
        <DetailTitle>이름</DetailTitle>
        <Input type="text" placeholder="홍길동" />
        <DetailTitle>이메일</DetailTitle>
        <Input type="email" placeholder="example@naver.com" />
        <DetailTitle>휴대전화 번호</DetailTitle>
        <Input type="tel" placeholder="-를 제외한 휴대전화 번호를 입력해주세요." />
        <DetailTitle>회사</DetailTitle>
        <Input type="text" placeholder="oo 카페" />
        <DetailTitle>비밀번호 (8자 이상)</DetailTitle>
        <Input type="password" placeholder="*********" />
        <DetailTitle>비밀번호 확인</DetailTitle>
        <Input type="password" placeholder="*********" />
        <CheckBox>
          <CheckLabel>
            <input type="checkbox" />
            <CheckTitle>이용약관 및 개인정보 처리방침에 동의</CheckTitle>
          </CheckLabel>
        </CheckBox>
        <CheckBox>
          <CheckLabel>
            <input type="checkbox" />
            <CheckTitle>이벤트 및 할인 소식 알림 동의 (선택)</CheckTitle>
          </CheckLabel>
        </CheckBox>
        <Button color="orange">회원가입</Button>
        <Hr />
        <Button>아이디, 비밀번호 찾기</Button>
        <Button>회원 로그인</Button>
      </Form>
    </Container>
  );
}

export default Join;
