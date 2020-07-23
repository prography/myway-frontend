import { combineReducers } from 'redux';
import PartnerReducer, { PartnerState } from 'store/partner';
import AuthReducer, { AuthState } from 'store/auth';
import cartInfoReducer, { CartState } from 'store/cart';
import PayReducer, { PayState } from 'store/pay';
import AdReducer, { AdState } from 'store/ad';

export type RootState = {
  partner: PartnerState;
  auth: AuthState;
  cart: CartState;
  pay: PayState;
  ad: AdState;
};

export default combineReducers({
  partner: PartnerReducer,
  auth: AuthReducer,
  cart: cartInfoReducer,
  pay: PayReducer,
  ad: AdReducer,
});
