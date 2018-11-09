import { ActionTypes, ActionWithData } from './actions';
import BillGroup from '../models/BillGroup';
import State, { initialState } from './state';
import { Action } from 'redux';
import LoadingState from '../models/LoadingState';
import ErrorState from '../models/ErrorState';

const reducerDefinitions: {
  [type: string]: (state: State, action: Action<ActionTypes>) => State;
} = {
  [ActionTypes.BILL_GROUP_LOADED_SUCCESS]: (state, action) => ({
    ...state,
    loadingState: LoadingState.NO_LOADING,
    errorState: ErrorState.NO_ERROR,
    billGroup: (action as ActionWithData<BillGroup>).data,
  }),
  [ActionTypes.BILL_GROUP_LOADED_ERROR]: (state, action) => ({
    ...state,
    loadingState: LoadingState.NO_LOADING,
    errorState: (action as ActionWithData<ErrorState>).data,
  }),
  [ActionTypes.BILL_GROUP_LOADED_STARTING]: state => ({
    ...state,
    loadingState: LoadingState.BILLGROUP_LOADING,
    errorState: ErrorState.NO_ERROR,
  }),
};

export default (state: State = initialState, action: Action<ActionTypes>) => {
  const reducer = reducerDefinitions[action.type];
  return reducer ? reducer(state, action) : state;
};
