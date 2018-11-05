import billService from '../services/BillService';

export const actions = {
  BILLGROUP_LOADED_SUCCESS: 'BILLGROUP_LOADED_SUCCESS',
  BILLGROUP_LOADED_ERROR: 'BILLGROUP_LOADED_ERROR',
  BILLGROUP_LOADED_STARTING: 'BILLGROUP_LOADED_STARTED',
};

export const loadBillGroup = billGroupId => dispatch => {
  dispatch(loadingBillGroupStarted());

  billService
    .loadBillGroup(billGroupId)
    .subscribe(
      billGroup => dispatch(loadedBillGroupSuccessful(billGroup)),
      error => dispatch(loadedBillGroupWithErrors(error))
    );
};

export const loadingBillGroupStarted = () => ({
  type: actions.BILLGROUP_LOADED_STARTING,
});

export const loadedBillGroupSuccessful = billGroup => ({
  type: actions.BILLGROUP_LOADED_SUCCESS,
  payload: { billGroup },
});

export const loadedBillGroupWithErrors = error => ({
  type: actions.BILLGROUP_LOADED_ERROR,
});
