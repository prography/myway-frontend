export type adTimeTables = {
  adDate: string;
  adHour: number;
  partnerAddress: string;
  partnerImgUrl: string;
  partnerPhone: string;
  partnerPricePerHour: number;
  partnerStoreName: string;
};

export type adReservationInfo = {
  adReservationId: string;
  createdAt: string;
  paidAmount: number;
  adStatus: number;
  adTimeTables: adTimeTables[];
};

export type reservationInfo = {
  adReservationInfo: adReservationInfo;
};
