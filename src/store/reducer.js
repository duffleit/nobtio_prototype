import { actions } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.BILLGROUP_LOADED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: null,
        result: action.payload,
      };
    case actions.BILLGROUP_LOADED_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
        result: action.payload,
      };
    case actions.BILLGROUP_LOADED_STARTING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};
