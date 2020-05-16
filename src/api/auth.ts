import axios from 'axios';

export interface JoinParams {
  name: string;
  email: string;
  company: string;
  pwd: string;
};

export const joinAdvertiser = async (params: JoinParams) => {
  const { data } = await axios.post('https://api.copl.kr/advertisers',  params );
  
  return data;
};