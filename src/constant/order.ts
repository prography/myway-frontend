export const getOrderState = (state: number) => {
  switch (state) {
    case 0:
      return '대기중';
    case 1:
      return '광고 검수 중';
    case 2:
      return '광고 승인 완료';
    case 3:
      return '광고 거절';
  }
};
