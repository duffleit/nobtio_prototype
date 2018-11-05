import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPages from './pages/dashboard/DashboardPage';
import UserBalancePage from './pages/userBalance/UserBalancePage';
import BalancesPage from './pages/balances/BalancesPage';
import BillPage from './pages/bill/BillPage';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/:id/bill" component={BillPage} />
        <Route exact path="/:id/balances" component={BalancesPage} />
        <Route path="/:id/balances/:userId" component={UserBalancePage} />
        <Route exact path="/:id" component={DashboardPages} />
      </Switch>
    );
  }
}
