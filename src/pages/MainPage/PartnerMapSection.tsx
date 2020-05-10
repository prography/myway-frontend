import React, { useState } from 'react';
import NaverMap from 'components/NaverMap';
import usePartner from 'hooks/usePartner';
import PartnerDetail from './PartnerDetail';
import { Partner } from 'models/partner';
import { Section, MapSectionTitle, PartnerApply } from './style';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

type Props = {
  onModalOpen: () => void;
};

const PartnerMapSection: React.FC<Props> = ({ onModalOpen }) => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const selectPartner = (partnerData: Partner): void => {
    setSelectedPartner(partnerData);
  };

  const partners = usePartner();

  return (
    <Section id="map-section">
      <div>
        {partners.length && (
          <NaverMap placeList={partners} setPartner={selectPartner} />
        )}
      </div>
      <div className="map-detail-view">
        {selectedPartner ? (
          <PartnerDetail data={selectedPartner} />
        ) : (
          <>
            <MapSectionTitle color="light" align="left">
              내 광고, 어디에 하면 좋을까요?
              <br />
              <span className="highlight text-orange">
                지금 바로 광고가 가능한
                <br />
                우리 동네 가게
              </span>
              를 찾아보세요!
            </MapSectionTitle>
            <PartnerApply>
              <span>내 가게가 안 보이나요?</span>
              <div onClick={onModalOpen}>
                <span>파트너 신청하기</span> <ArrowForwardIcon />
              </div>
            </PartnerApply>
          </>
        )}
      </div>
    </Section>
  );
};

export default PartnerMapSection;
