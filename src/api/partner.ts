import axios from 'axios';
import { Partner } from 'models/partner';

export const getPartners = async () => {
  const { data } = await axios.get<{ arr: Partner[] }>('https://api.copl.kr/partners');

  return data.arr;
};

export interface ApplyPartnerParams {
  phone: string;
  address: string;
  ownerName: string;
  storeName: string;
  content: string;
};

export const applyPartner = async (params: ApplyPartnerParams) => {
  const { data } = await axios.post('https://api.copl.kr/apply-partner',  params );
  
  return data;
};