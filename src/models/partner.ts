export type availAdTime = {
  id: number;
  adDate: string;
  adHour: number;
};

export type Partner = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  imgUrl: string;
  //description: string;
  createdAt: string;
  address: string;
  workingTime: string;
  store_name?: string;
  phone: string;
  pricePerHour: number;
  availAdTimeTables: availAdTime[];
};
