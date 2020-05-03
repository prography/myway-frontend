import { produce } from 'immer';
import { Partner } from 'models/partner';

export type PartnerState = {
  status: string;
  items: Partner[];
};

const initialState: PartnerState = {
  status: 'INIT',
  items: [],
};

const partnerReducer = (state: PartnerState = initialState, action: any): PartnerState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'GET_PARTNERS_REQUEST':
        draft.status = 'REQUEST';

      case 'GET_PARTNERS_SUCCESS':
        draft.status = 'SUCCESS';
        draft.items = action.payload;

      case 'GET_PARTNERS_FAILURE':
        draft.status = 'FAILURE';

      default:
        return draft;
    }
  });
};

export default partnerReducer;
