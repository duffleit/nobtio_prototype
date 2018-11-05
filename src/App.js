import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContainer from './container/AppContainer';
import BillPage from './pages/bill/BillPage';
import BalancesPage from './pages/balances/BalancesPage';
import UserBalancePage from './pages/userBalance/UserBalancePage';
import DashboardPage from './pages/dashboard/DashboardPage';

export default () => (
  <Route
    path="/:billGroupId"
    render={props => {
      return (
        <AppContainer {...props}>
          <Switch>
            <Route exact path="/:billGroupId/bill" component={BillPage} />
            <Route exact path="/:billGroupId/balances" component={BalancesPage} />
            <Route path="/:billGroupId/balances/:userId" component={UserBalancePage} />
            <Route exact path="/:billGroupId" component={DashboardPage} />
          </Switch>
        </AppContainer>
      );
    }}
  />
);
