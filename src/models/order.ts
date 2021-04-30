import { Partner } from './partner';

export type AdTimeTable = {
  id: number;
  partnerInfo: Partner;
  adDate: string;
  adHour: string;
};

export type Order = {
  id: number;
  advertiserId: number;
  adType?: null;
  adStatus: number;
  paidAmount: number;
  createdAt: string;
  adTimeTables: AdTimeTable[];
};
