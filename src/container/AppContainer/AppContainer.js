import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBillGroup } from '../../store/actions';
import Frame from './components/Frame';
import AppBar from './components/AppBar';

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
        {props.isLoading ? <div>loading...</div> : <div>{props.children}</div>}
      </Frame>
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
