import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';

const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  height: 70px;
`;

const NavigationWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  font-family: Gm Bold;
`;

const HeaderNav = styled.nav`

  ul {
    &:after {
      content: '';
      display: block;
      clear: both;
    }

    li { 
      float: left;

      a {
        display: inline-block;
        padding: 0.6rem;
        font-size: 0.85rem;
        color: #fff;
      }
    }
  }
`;

const Header = () => {

  return (
    <HeaderWrap>
      <Container>
        <NavigationWrap>
          <HeaderTitle>MYWAY</HeaderTitle>
          <HeaderNav>
            <ul>
              <li>
                <Link to="/product">마이웨이</Link>
              </li>
              <li>
                <Link exact to="/ranking">마이웨이</Link>
              </li>
            </ul>
          </HeaderNav>
        </NavigationWrap>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
