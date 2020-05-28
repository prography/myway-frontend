import React, { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from 'store/auth/action';
import { LoginParams } from 'api/auth';
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
  const dispatch = useDispatch();
  const { status } = useSelector((state: StoreState) => state.auth.login);
  const isLoggedIn = useSelector((state: StoreState) => state.auth.me.isLoggedIn);

  useEffect(() => {
    if (status === 'SUCCESS') {
      window.location.href = '/';
    } 
    if (status === 'FAILURE') {
      window.alert('이메일 혹은 비밀번호가 일치하지 않아요 !');
    }
  }, [status]);
  
  const [loginContent, setLoginContent] = useState<LoginParams>({
    email: '',
    pwd: '',
  });

  const handleJoin = (e: MouseEvent) => {
    window.location.href = '/join';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginContent({...loginContent, [e.currentTarget.id]: e.currentTarget.value});
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({
      email: loginContent.email,
      pwd: loginContent.pwd,
    }));
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  
  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>로그인</Title>
        <DetailTitle>이메일</DetailTitle>
        <Input 
          id="email" 
          type="email" 
          placeholder="example@naver.com" 
          onChange={handleChange} 
          required 
        />
        <DetailTitle>비밀번호</DetailTitle>
        <Input 
          id="pwd" 
          type="password" 
          placeholder="*********" 
          onChange={handleChange} 
          required 
        />
        <CheckBox>
          <CheckLabel>
            <input type="checkbox" />
            <CheckTitle>로그인 상태 유지</CheckTitle>
          </CheckLabel>
        </CheckBox>
        <Button type="submit" color="orange">로그인</Button>
        <Hr />
      </Form>
      <Button>아이디, 비밀번호 찾기</Button>
      <Button onClick={handleJoin}>회원가입 하기</Button>
    </Container>
  );
}

export default Login;
