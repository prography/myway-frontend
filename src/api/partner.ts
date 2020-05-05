import axios from 'axios';
import { Partner } from 'models/partner';

export const getPartners = async () => {
  const { data } = await axios.get<{ arr: Partner[] }>('https://api.copl.kr/partners');

  return data.arr;
};