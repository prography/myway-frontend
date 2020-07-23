import { createEntity } from 'utils/redux';
import * as partnerApi from 'api/partner';

export const GET_PARTNERS = 'GET_PARTNERS';
export const GET_PARTNER_DETAIL = 'GET_PARTNER_DETAIL';
export const APPLY_PARTNER = 'APPLY_PARTNER';

export const getPartnersEntity = createEntity(
  GET_PARTNERS,
  partnerApi.getPartners,
);
export const getPartners = () => ({
  type: GET_PARTNERS,
});

export const getPartnerDetailEntity = createEntity(
  GET_PARTNER_DETAIL,
  partnerApi.getPartnerDetail,
);
export const getPartnerDetail = (id: number) => ({
  type: GET_PARTNER_DETAIL,
  id,
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
export type GetPartnerDetail = ReturnType<typeof getPartnerDetail>;
export type ApplyPartner = ReturnType<typeof applyPartner>;
