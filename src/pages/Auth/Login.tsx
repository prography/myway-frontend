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

const Login = () => {

  return(
    <Container>
      <Form>
        <Title>로그인</Title>
        <DetailTitle>이메일</DetailTitle>
        <Input type="email" placeholder="example@naver.com" />
        <DetailTitle>비밀번호</DetailTitle>
        <Input type="password" placeholder="*********" />
        <CheckBox>
          <CheckLabel>
            <input type="checkbox" />
            <CheckTitle>로그인 상태 유지</CheckTitle>
          </CheckLabel>
        </CheckBox>
        <Button color="orange">로그인</Button>
        <Hr />
        <Button>아이디, 비밀번호 찾기</Button>
        <Button>회원가입 하기</Button>
      </Form>
    </Container>
  );
}

export default Login;
