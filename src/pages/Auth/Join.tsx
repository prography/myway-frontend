import React, { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { join } from 'store/auth/action';
import { JoinParams } from 'api/auth';
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

interface JoinContentParams extends JoinParams {
  pwdChk: string;
}

const Join = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: StoreState) => state.auth.join);

  useEffect(() => {
    if (status === 'SUCCESS') {
      window.alert('회원가입이 완료되었습니다 !');
      window.location.href = '/';
    } 
    if (status === 'FAILURE') {
      window.alert('이미 가입되어있는 이메일입니다 !');
    }
  }, [status]);

  const [joinContent, setJoinContent] = useState<JoinContentParams>({
    name: '',
    email: '',
    company: '',
    pwd: '',
    pwdChk: '',
  });

  const handleLogin = (e: MouseEvent) => {
    window.location.href = '/login';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJoinContent({...joinContent, [e.currentTarget.id]: e.currentTarget.value});
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (joinContent.pwd !== joinContent.pwdChk) {
      window.alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (joinContent.pwd.length < 8) {
      window.alert('비밀번호를 8자리 이상으로 설정해주세요.');
      return;
    }
    dispatch(join({
      name: joinContent.name,
      email: joinContent.email,
      company: joinContent.company,
      pwd: joinContent.pwd,
    }));
  };

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>회원가입</Title>
        <DetailTitle>이름</DetailTitle>
        <Input 
          id="name" 
          type="text" 
          placeholder="홍길동" 
          onChange={handleChange} 
          required
        />
        <DetailTitle>이메일</DetailTitle>
        <Input 
          id="email" 
          type="email" 
          placeholder="example@naver.com" 
          onChange={handleChange} 
          required 
        />
        <DetailTitle>휴대전화 번호</DetailTitle>
        <Input 
          id="tel" 
          type="tel" 
          placeholder="-를 제외한 휴대전화 번호를 입력해주세요." 
          onChange={handleChange} 
          required 
        />
        <DetailTitle>회사</DetailTitle>
        <Input 
          id="company" 
          type="text" 
          placeholder="oo 카페" 
          onChange={handleChange} 
          required 
        />
        <DetailTitle>비밀번호 (8자 이상)</DetailTitle>
        <Input 
          id="pwd" 
          type="password" 
          placeholder="*********" 
          onChange={handleChange} 
          required 
        />
        <DetailTitle>비밀번호 확인</DetailTitle>
        <Input 
          id="pwdChk" 
          type="password" 
          placeholder="*********" 
          onChange={handleChange} 
          required 
        />
        <CheckBox>
          <CheckLabel>
            <input type="checkbox" required />
            <CheckTitle>이용약관 및 개인정보 처리방침에 동의</CheckTitle>
          </CheckLabel>
        </CheckBox>
        <CheckBox>
          <CheckLabel>
            <input type="checkbox" />
            <CheckTitle>이벤트 및 할인 소식 알림 동의 (선택)</CheckTitle>
          </CheckLabel>
        </CheckBox>
        <Button type="submit" color="orange">회원가입</Button>
        <Hr />
      </Form>
      <Button>아이디, 비밀번호 찾기</Button>
      <Button onClick={handleLogin}>회원 로그인</Button>
    </Container>
  );
}

export default Join;
