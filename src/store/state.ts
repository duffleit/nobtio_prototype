import { BillGroup } from '../domain/BillGroup';

export interface State {
  isLoading: boolean;
  hasError: boolean;
  billGroup?: BillGroup;
}
