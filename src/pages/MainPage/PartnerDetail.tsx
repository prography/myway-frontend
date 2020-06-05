import React from 'react';
import styled from 'styled-components';
import { Partner } from 'models/partner';

import TestImage from 'assets/images/img_main.jpg';
import IconClock from 'assets/images/icon_clock.png';
import IconLocation from 'assets/images/icon_location.png';

type Props = {
  data: Partner;
};

const PartnerDetail: React.FC<Props> = ({ data }) => {
  return (
    <PartnerInfoContainer>
      <div>
        <Title>{data.name}</Title>
        <ParnterInfoList>
          <li>
            <span className="icon">
              <img src={IconLocation} alt="icon_location" />
            </span>
            {data.address}
          </li>
          <li>
            <span className="icon">
              <img src={IconClock} alt="icon_clock" />
            </span>
            {data.workingTime}
          </li>
        </ParnterInfoList>
      </div>
      <ParnterInfoPic>
        <img src={data.imgUrl} alt="test_image" width={508} />
      </ParnterInfoPic>
    </PartnerInfoContainer>
  );
};

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Light;
  font-weight: 300;
  font-stretch: normal;
  letter-spacing: -2.4px;
  line-height: 1.5;
  margin-bottom: 1.75rem;
  color: #fff;
`;

const ParnterInfoList = styled.ul`
  margin-bottom: 9.125rem;

  li {
    span.icon {
      display: inline-block;
      margin-right: 0.875rem;
    }

    color: rgba(255, 255, 255, 0.7);
    font-size: 1.375rem;
  }
`;

const PartnerInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ParnterInfoPic = styled.div`
  width: 526.3px;
  height:345px;
  position: relative;
  display: block;
  overflow: hidden;

	img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PartnerDetail;
