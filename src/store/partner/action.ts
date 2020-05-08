import { createEntity } from 'utils/redux';
import * as partnerApi from 'api/partner';

export const GET_PARTNERS = 'GET_PARTNERS';
export const APPLY_PARTNER = 'APPLY_PARTNER';

export const getPartnersEntity = createEntity(GET_PARTNERS, partnerApi.getPartners);
export const getPartners = () => ({
  type: GET_PARTNERS,
});

export const applyPartnerEntity = createEntity(
  APPLY_PARTNER,
  partnerApi.applyPartner,
);
export const applyPartner = (params: partnerApi.ApplyPartnerParams) => ({
  type: APPLY_PARTNER,
  params,
});

export type GetPartners = ReturnType<typeof getPartners>;
export type ApplyPartner = ReturnType<typeof applyPartner>;
