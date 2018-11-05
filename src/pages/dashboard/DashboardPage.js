import React from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/Header/HeaderTitle';
import HeaderSubtitle from '../../components/Header/HeaderSubtitle';
import HeaderActionButton from '../../components/Header/HeaderActionButton';
import { connect } from 'react-redux';
import { getPersonsInvolvedInBills, getTotalAmountOfBills } from './DashboardSelector';
import Currency from '../../components/Currency/Currency';

const dashboard = props => {
  const totalAmount = <Currency amount={props.totalAmount} />;
  const personCount = `${props.numberOfPersons} person${props.numberOfPersons !== 1 ? 's' : ''}`;

  return (
    <div>
      <Header>
        <HeaderTitle>Kevin Bauer Geburtstagsparty</HeaderTitle>
        <HeaderSubtitle>
          bills of <b>{personCount}</b> add up to <b>{totalAmount}</b>
        </HeaderSubtitle>
        <HeaderActionButton>Balances</HeaderActionButton>
      </Header>
      <div style={{ height: '10000px' }} />
    </div>
  );
};

export default connect(state => ({
  numberOfPersons: getPersonsInvolvedInBills(state).length,
  totalAmount: getTotalAmountOfBills(state),
}))(dashboard);
