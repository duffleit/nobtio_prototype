import React from 'react';
import { CurrencyContext } from '../../container/AppContainer/AppContainer';
import Currency from 'react-currency-formatter';

export default ({ amount }) => {
  const amountToRender = Number.parseFloat(amount) || 0;
  return (
    <CurrencyContext.Consumer>
      {currency => <Currency quantity={amountToRender} currency={currency} />}
    </CurrencyContext.Consumer>
  );
};
