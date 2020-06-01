import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { combineReducers } from 'redux';
import { Partner } from 'models/partner';
import { createReducer } from 'utils/redux';
import { getPartnersEntity, applyPartnerEntity } from 'store/partner/action';

export type PartnerState = {
  partners: {
    status: Status;
    items: Partner[];
  },
  partnerDetail: {
    status: Status;
    item: Partner;
  },
  applyPartner: {
    status: Status;
  },
};

const initialState: PartnerState = {
  partners: {
    status: 'INIT',
    items: [],
  },
  partnerDetail: {
    status: 'INIT',
    item: {
      id: 0,
      name: '',
      lat: 0,
      lng: 0,
      imgUrl: '',
      createdAt: '',
      address: '',
      workingTime: '',
      phone: '',
      pricePerHour: 0,
      availAdTimeTables: [],
    },
  },
  applyPartner: {
    status: 'INIT',
  },
};

const partnerReducer = createReducer(getPartnersEntity, initialState.partners);

const partnerDetailReducer = handleActions({
  ['GET_PARTNER_DETAIL_REQUEST']: (state, action) => {
    return produce(state, draft => {
      draft.status = 'REQUEST';
    });
  },
  ['GET_PARTNER_DETAIL_SUCCESS']: (state, action) => {
    return produce(state, draft => {
      draft.status = 'SUCCESS';
      draft.item = action.payload as unknown as Partner;
    });
  },
  ['GET_PARTNER_DETAIL_FAILURE']: (state, action) => {
    return produce(state, draft => {
      draft.status = 'FAILURE';
    });
  },
}, initialState.partnerDetail);

const applyPartnerReducer = createReducer(applyPartnerEntity, initialState.applyPartner);

export default combineReducers({
  partners: partnerReducer,
  partnerDetail: partnerDetailReducer,
  applyPartner: applyPartnerReducer,
});
