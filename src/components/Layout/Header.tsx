import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from './Container';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.svg';
import { destroyAuthToken } from 'utils/auth';

const Header = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.me.isLoggedIn,
  );

  const handleLogout = () => {
    const confirm = window.confirm('로그아웃 하시겠습니까?');
    if (!confirm) return;
    destroyAuthToken();
    window.location.href = '/';
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <LogoWrapper>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </LogoWrapper>
          <Navigation>
            <li>
              <Link to="/places">플레이스</Link>
            </li>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/join">회원가입</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/mypage">마이페이지</Link>
                </li>
                <li>
                  <Link to="#" onClick={handleLogout}>
                    로그아웃
                  </Link>
                </li>
              </>
            )}
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
  padding: 1rem 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  font-size: 1rem;

  a {
    img {
      width: 72px;
      height: 32px;
    }
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
