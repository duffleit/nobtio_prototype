import { ActionType, ActionWithPayload } from './actionType';
import { BillGroup } from '../domain/BillGroup';
import { State } from './state';
import { Action } from 'redux';

const initialState: State = {
  isLoading: false,
  hasError: false,
};

export default (state: State = initialState, action: Action<ActionType>) => {
  switch (action.type) {
    case ActionType.BILL_GROUP_LOADED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        billGroup: (action as ActionWithPayload<BillGroup>).payload,
      };
    case ActionType.BILL_GROUP_LOADED_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case ActionType.BILL_GROUP_LOADED_STARTING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    default:
      return state;
  }
};
