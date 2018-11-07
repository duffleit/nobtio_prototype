import React from 'react';
// @ts-ignore: no ts-typings
import CurrencyFormatter from 'react-currency-formatter';
import { CurrencyContext } from '../../container/AppContainer/AppContainer';

export interface Props {
  amount: number;
}

const currency: React.SFC<Props> = ({ amount }) => {
  return (
    <CurrencyContext.Consumer>
      {contextCurrency => <CurrencyFormatter quantity={amount} currency={contextCurrency} />}
    </CurrencyContext.Consumer>
  );
};

export default currency;
