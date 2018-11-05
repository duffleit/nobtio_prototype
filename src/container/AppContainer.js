import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBillGroup } from '../store/actions';

class AppContainer extends Component {
  componentDidMount() {
    const billGroupId = this.props.match.params.billGroupId;
    this.props.loadBillGroup(billGroupId);
  }

  render() {
    const props = this.props;
    const history = this.props.history;

    let currentLocation = this.props.history.location.pathname;
    const isOnRootLevel = (currentLocation.split('/')[2] || '').length > 0;

    return props.isLoading ? (
      <div>loading...</div>
    ) : (
      <div>
        <button disabled={!isOnRootLevel} onClick={() => history.goBack()}>
          GoBack
        </button>
        {props.children}
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.isLoading,
    hasError: state.hasError,
  }),
  disptach => ({
    loadBillGroup: billGroupId => disptach(loadBillGroup(billGroupId)),
  })
)(AppContainer);
