import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <LogoWrapper>
            <Link to="/">COPL</Link>
          </LogoWrapper>
          <Navigation>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/join">회원가입</Link>
            </li>
          </Navigation>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 60px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  font-size: 1rem;

  a {
    font-size: 1.5rem;
    color: #333;
  }
`;

const Navigation = styled.ul`
  li {
    float: left;

    a {
      font-size: 0.875rem;
      padding: 0 0.5rem;
      color: #333;
    }
  }
`;

export default Header;
