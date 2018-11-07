import billService from '../services/BillGroupService';
import { BillGroup } from '../domain/BillGroup';
import { Dispatch, Action } from 'redux';

export enum ActionType {
  BILL_GROUP_LOADED_SUCCESS = 'BILLGROUP_LOADED_SUCCESS',
  BILL_GROUP_LOADED_ERROR = 'BILLGROUP_LOADED_ERROR',
  BILL_GROUP_LOADED_STARTING = 'BILLGROUP_LOADED_STARTED',
}

export interface ActionWithPayload<T> extends Action<ActionType> {
  payload: T;
}

// @ts-ignore: Thunk-Action not a valid Action type
export const loadBillGroup: (id: string) => Action = (id: string) => (dispatch: Dispatch) => {
  dispatch(loadingBillGroupStarted());

  billService
    .load(id)
    .subscribe(
      billGroup => dispatch(loadedBillGroupSuccessful(billGroup)),
      () => dispatch(loadedBillGroupWithErrors())
    );
};

export const loadingBillGroupStarted = (): Action => ({
  type: ActionType.BILL_GROUP_LOADED_STARTING,
});

export const loadedBillGroupSuccessful = (billGroup: BillGroup): ActionWithPayload<BillGroup> => ({
  type: ActionType.BILL_GROUP_LOADED_SUCCESS,
  payload: billGroup,
});

export const loadedBillGroupWithErrors = (): Action => ({
  type: ActionType.BILL_GROUP_LOADED_ERROR,
});
