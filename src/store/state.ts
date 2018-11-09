import { BillGroup } from '../models/BillGroup';
import { LoadingState } from '../models/LoadingState';
import { ErrorState } from '../models/ErrorState';

export default interface State {
  loadingState: LoadingState;
  errorState: ErrorState;
  billGroup?: BillGroup;
}

export const initialState: State = {
  loadingState: LoadingState.NO_LOADING,
  errorState: ErrorState.NO_ERROR,
};
