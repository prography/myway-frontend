import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';

const Slick = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  ul {
    display: flex;
    justify-content: space-between;

    li {
      margin: 0 0.65rem;
      cursor: pointer;

      div {
        width: 7px;
        height: 7px;
        border-radius: 3.5px;
        background-color: #dddddd;
      }

      &.slick-active div {
        width: 35px;
        background-color: ${(props) => props.theme.palette.mainColor};
      }
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

function Slide({ children }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <Slick>
        <ul>{dots}</ul>
      </Slick>
    ),
    customPaging: () => <div className="slick-dot-custom" />,
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default Slide;
