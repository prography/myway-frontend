import { combineReducers } from 'redux';
import { createReducer } from 'utils/redux';
import { getCartInfoEntity } from 'store/cart/action';
import { Cart } from 'models/cart';

export type CartState = {
  cartInfo: {
    status: Status;
    items: Cart[];
  };
};

const initialState: CartState = {
  cartInfo: {
    status: 'INIT',
    items: [],
  },
};

const cartInfoReducer = createReducer(getCartInfoEntity, initialState.cartInfo);

export default combineReducers({
  cartInfo: cartInfoReducer,
});
