import { Partner } from './partner';

export type Cart = {
  partnerId: number;
  adTimeIds: number[];
};

export type CartInfo = {
  partnerInfo: Partner;
  timeList: number[];
};
