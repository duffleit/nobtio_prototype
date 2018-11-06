import React from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/Header/HeaderTitle';
import HeaderSubtitle from '../../components/Header/HeaderSubtitle';
import HeaderActionButton from '../../components/Header/HeaderActionButton';
import { connect } from 'react-redux';
import {
  getPersonsInvolvedInBills,
  getTotalAmountOfBills,
  getTransactionsWithTotalAmount,
} from './DashboardSelector';
import Currency from '../../components/Currency/Currency';
import Content from '../../components/Content/Content';
import ContentHeader from '../../components/Content/ContentHeader';
import ContentRow from '../../components/Content/ContentRow';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import TransactionRecord from '../../components/TransactionRecord/TransactionRecord';

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
      <Content>
        <ContentHeader>Activities</ContentHeader>
        {props.transactions.map(transaction => (
          <ContentRow>
            <TransactionRecord transaction={transaction} />
          </ContentRow>
        ))}
      </Content>
      <FloatingActionButton />
    </div>
  );
};

export default connect(state => ({
  numberOfPersons: getPersonsInvolvedInBills(state).length,
  totalAmount: getTotalAmountOfBills(state),
  transactions: getTransactionsWithTotalAmount(state),
}))(dashboard);
