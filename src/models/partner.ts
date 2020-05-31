type availAdTime = {
  adDate: string;
  adHour: number;
}

export type Partner = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  imgUrl: string;
  description: string;
  address: string;
  workingTime: string;
  phone: string;
  pricePerHour: number;
  availAdTimeTables: availAdTime[];
};
