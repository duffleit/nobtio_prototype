import billService from '../services/BillGroupService';
import BillGroup from '../models/BillGroup';
import { Dispatch, Action } from 'redux';
import ErrorState from '../models/ErrorState';

export enum ActionTypes {
  BILL_GROUP_LOADED_SUCCESS = 'BILLGROUP_LOADED_SUCCESS',
  BILL_GROUP_LOADED_ERROR = 'BILLGROUP_LOADED_ERROR',
  BILL_GROUP_LOADED_STARTING = 'BILLGROUP_LOADED_STARTED',
}

export interface ActionWithData<T> extends Action<ActionTypes> {
  data: T;
}

// @ts-ignore: Thunk-Action not a valid Action type
export const loadBillGroup: (id: string) => Action = (id: string) => (dispatch: Dispatch) => {
  dispatch(loadingBillGroupStarted());

  billService
    .load(id)
    .subscribe(
      billGroup => dispatch(loadedBillGroupSuccessful(billGroup)),
      (error: ErrorState) => dispatch(loadedBillGroupWithErrors(error))
    );
};

export const loadingBillGroupStarted = (): Action => ({
  type: ActionTypes.BILL_GROUP_LOADED_STARTING,
});

export const loadedBillGroupSuccessful = (billGroup: BillGroup): ActionWithData<BillGroup> => ({
  type: ActionTypes.BILL_GROUP_LOADED_SUCCESS,
  data: billGroup,
});

export const loadedBillGroupWithErrors = (errorState: ErrorState): ActionWithData<ErrorState> => ({
  type: ActionTypes.BILL_GROUP_LOADED_ERROR,
  data: errorState,
});
