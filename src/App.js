import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppContainer from './container/AppContainer/AppContainer';
import BillPage from './pages/bill/BillPage';
import BalancesPage from './pages/balances/BalancesPage';
import UserBalancePage from './pages/userBalance/UserBalancePage';
import DashboardPage from './pages/dashboard/DashboardPage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './styles/muitheme';

export default () => (
  <MuiThemeProvider theme={muiTheme}>
    <Route
      path="/:billGroupId"
      render={props => {
        return (
          <AppContainer {...props}>
            <Switch>
              <Route exact path="/:billGroupId/bill" component={BillPage} />
              <Route exact path="/:billGroupId/balances" component={BalancesPage} />
              <Route exact path="/:billGroupId/balances/:userId" component={UserBalancePage} />
              <Route exact path="/:billGroupId" component={DashboardPage} />
              <Redirect to="/:billGroupId" />
            </Switch>
          </AppContainer>
        );
      }}
    />
  </MuiThemeProvider>
);
