import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBillGroup } from '../../store/actions';
import AppFrame from './components/AppFrame';
import State from '../../store/state';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import Loader from './components/LoadingPage';
import Error from './components/ErrorPage';
import { ErrorState } from '../../models/ErrorState';
import { LoadingState } from '../../models/LoadingState';

const DEFAULT_CURRENCY = 'USD';

export const CurrencyContext = React.createContext(DEFAULT_CURRENCY);

interface StateProps {
  currency: string;
  loadingState: LoadingState;
  errorState: ErrorState;
}

interface DispatchProps {
  loadBillGroup: (id: string) => void;
}

interface Props extends DispatchProps, StateProps, RouteComponentProps<{ billGroupId: string }> {}

class AppContainer extends Component<Props> {
  public componentDidMount() {
    const billGroupId = this.props.match.params.billGroupId;
    this.props.loadBillGroup(billGroupId);
  }

  public render() {
    const props = this.props;
    return (
      <AppFrame>
        <Error errorState={props.errorState} history={props.history}>
          <Loader loadingState={props.loadingState} history={props.history}>
            <CurrencyContext.Provider value={props.currency}>
              {props.children}
            </CurrencyContext.Provider>
          </Loader>
        </Error>
      </AppFrame>
    );
  }
}

export default connect(
  (state: State): StateProps => ({
    errorState: state.errorState,
    loadingState: state.loadingState,
    currency: (state.billGroup || { currency: DEFAULT_CURRENCY }).currency,
  }),
  (dispatch: Dispatch): DispatchProps => ({
    loadBillGroup: (billGroupId: string) => dispatch(loadBillGroup(billGroupId)),
  })
)(AppContainer);
