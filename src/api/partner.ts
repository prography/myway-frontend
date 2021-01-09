import fetcher from 'utils/fetcher';
import { Partner } from 'models/partner';
import { Cart } from 'models/cart';

export const getPartners = async () => {
  const { data } = await fetcher.get<{ arr: Partner[] }>('/partners');

  return data.arr;
};

export const getPartnerDetail = async (id: Partner['id']) => {
  const { data } = await fetcher.get<{ data: Partner }>(`/partners/${id}`);

  return data.data;
};

export interface ApplyPartnerParams {
  phone: string;
  address: string;
  ownerName: string;
  storeName: string;
  content: string;
}

export const applyPartner = async (params: ApplyPartnerParams) => {
  const { data } = await fetcher.post('/apply-partner', params);

  return data;
};

export const getCartInfo = async (params: Cart[]) => {
  const { data } = await fetcher.post('/cart-info', {
    basicCartInfo: params,
  });

  return data.arr;
};
