import { produce } from 'immer';
import { combineReducers } from 'redux';
import { Partner } from 'models/partner';

export type PartnerState = {
  partners: {
    status: string;
    items: Partner[];
  },
  applyPartner: {
    status: string;
  },
};

const initialState: PartnerState = {
  partners: {
    status: 'INIT',
    items: [],
  },
  applyPartner: {
    status: 'INIT',
  },
};

const partnerReducer = (
  state: PartnerState['partners'] = initialState.partners, 
  action: any
): PartnerState['partners'] => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'GET_PARTNERS_REQUEST':
        draft.status = 'REQUEST';
        return draft;
      case 'GET_PARTNERS_SUCCESS':
        draft.status = 'SUCCESS';
        draft.items = action.payload;
        return draft;
      case 'GET_PARTNERS_FAILURE':
        draft.status = 'FAILURE';
        return draft;
      default:
        return draft;
    }
  });
};

const applyPartnerReducer = (
  state: PartnerState['applyPartner'] = initialState.applyPartner, 
  action: any
): PartnerState['applyPartner'] => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'APPLY_PARTNER_REQUEST':
        draft.status = 'REQUEST';
        return draft;
      case 'APPLY_PARTNER_SUCCESS':
        draft.status = 'SUCCESS';
        return draft;
      case 'APPLY_PARTNER_FAILURE':
        draft.status = 'FAILURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  partners: partnerReducer,
  applyPartner: applyPartnerReducer,
});
