import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBillGroup } from '../../store/actions';
import Frame from './components/Frame';
import AppBar from './components/AppBar';

export const CurrencyContext = React.createContext('USD');

class AppContainer extends Component {
  componentDidMount() {
    const billGroupId = this.props.match.params.billGroupId;
    this.props.loadBillGroup(billGroupId);
  }

  render() {
    const props = this.props;
    return (
      <Frame>
        <AppBar history={props.history} />
        {props.isLoading ? (
          <div>loading...</div>
        ) : (
          <CurrencyContext.Provider value={this.props.currency}>
            <div>{props.children}</div>
          </CurrencyContext.Provider>
        )}
      </Frame>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.isLoading,
    hasError: state.hasError,
    currency: state.currency,
  }),
  disptach => ({
    loadBillGroup: billGroupId => disptach(loadBillGroup(billGroupId)),
  })
)(AppContainer);
