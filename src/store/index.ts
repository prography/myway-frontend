import { combineReducers } from 'redux';
import PartnerReducer, { PartnerState } from 'store/partner';
import AuthReducer, { AuthState } from 'store/auth';
import CartInfoReducer, { CartState } from 'store/cart';
import PayReducer, { PayState } from 'store/pay';
import AdReducer, { AdState } from 'store/ad';
import MypageReducer, { MypageState } from 'store/mypage';

export type RootState = {
  partner: PartnerState;
  auth: AuthState;
  cart: CartState;
  pay: PayState;
  ad: AdState;
  mypage: MypageState;
};

export default combineReducers({
  partner: PartnerReducer,
  auth: AuthReducer,
  cart: CartInfoReducer,
  pay: PayReducer,
  ad: AdReducer,
  mypage: MypageReducer,
});
