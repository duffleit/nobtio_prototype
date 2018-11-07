import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBillGroup } from '../../store/actionType';
import AppBar from './components/AppBar';
import AppFrame from './components/AppFrame';
import { State } from '../../store/state';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

const DEFAULT_CURRENCY = 'USD';

export const CurrencyContext = React.createContext(DEFAULT_CURRENCY);

interface StateProps {
  isLoading: boolean;
  hasError: boolean;
  currency: string;
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
        <AppBar history={props.history} />
        {props.isLoading ? (
          <div>loading...</div>
        ) : (
          <CurrencyContext.Provider value={this.props.currency}>
            <div>{props.children}</div>
          </CurrencyContext.Provider>
        )}
      </AppFrame>
    );
  }
}

export default connect(
  (state: State): StateProps => ({
    isLoading: state.isLoading,
    hasError: state.hasError,
    currency: (state.billGroup || { currency: DEFAULT_CURRENCY }).currency,
  }),
  (dispatch: Dispatch): DispatchProps => ({
    loadBillGroup: (billGroupId: string) => dispatch(loadBillGroup(billGroupId)),
  })
)(AppContainer);
