import React from 'react';
// @ts-ignore: no ts-typings
import CurrencyFormatter from 'react-currency-formatter';
import { CurrencyContext } from '../../container/AppContainer/AppContainer';
import { StyledComponentProps, withStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

export interface Props extends StyledComponentProps {
  amount: number;
}

const currency: React.SFC<Props> = ({ amount, classes = {} }) => {
  return (
    <span className={classes.root}>
      <CurrencyContext.Consumer>
        {contextCurrency => <CurrencyFormatter quantity={amount} currency={contextCurrency} />}
      </CurrencyContext.Consumer>
    </span>
  );
};

const style = (): StyleRules => ({
  root: {
    whiteSpace: 'nowrap',
  },
});

export default withStyles(style)(currency);
