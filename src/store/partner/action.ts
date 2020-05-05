import { createEntity } from 'utils/redux';
import * as partnerApi from 'api/partner';

export const GET_PARTNERS = 'GET_PARTNERS';

export const getPartnersEntity = createEntity(GET_PARTNERS, partnerApi.getPartners);
export const getPartners = () => ({
  type: GET_PARTNERS,
});

export type GetPartners = ReturnType<typeof getPartners>;
