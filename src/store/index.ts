import { combineReducers } from 'redux';
import PartnerReducer, { PartnerState } from 'store/partner';
import AuthReducer, { AuthState } from 'store/auth';
import cartInfoReducer, { CartState } from 'store/cart';

export type RootState = {
  partner: PartnerState;
  auth: AuthState;
  cart: CartState;
};

export default combineReducers({
  partner: PartnerReducer,
  auth: AuthReducer,
  cart: cartInfoReducer,
});
