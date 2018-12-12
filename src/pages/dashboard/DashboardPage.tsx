import React from 'react';
import { connect } from 'react-redux';
import Content from '../../components/Content/Content';
import ContentHeader from '../../components/Content/ContentHeader';
import ContentRow from '../../components/Content/ContentRow';
import Currency from '../../components/Currency/Currency';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import Header from '../../components/Header/Header';
import HeaderActionButton from '../../components/Header/HeaderActionButton';
import HeaderSubtitle from '../../components/Header/HeaderSubtitle';
import HeaderTitle from '../../components/Header/HeaderTitle';
import ActivityRecord from '../../components/ActivityRecord/ActivityRecord';
import {
  getActivities,
  getPersonsInvolvedInBills,
  getTotalAmountOfBills,
  getBillGroupName,
  isBillGroupEmpty,
} from './DashboardSelector';
import State from '../../store/state';
import Activity from '../../models/Activity';
import AppBar from '../../components/AppBar/AppBar';
import { RouteComponentProps } from 'react-router';
import NoBillGroupRecords from './components/NoBillGroupRecords';

interface StateProps {
  name: string;
  totalAmount: number;
  numberOfPersons: number;
  activities: Activity[];
  isBillGroupEmpty: boolean;
}

interface Props extends StateProps, RouteComponentProps {}

const dashboard: React.SFC<Props> = props => {
  const totalAmount = <Currency amount={props.totalAmount} />;
  const personCount = `${props.numberOfPersons} person${props.numberOfPersons !== 1 ? 's' : ''}`;

  const noRecordsSoFar = props.isBillGroupEmpty;
  const recordsExist = !noRecordsSoFar;

  return (
    <div>
      <AppBar history={props.history} />
      <Header>
        <HeaderTitle>{props.name}</HeaderTitle>
        {recordsExist && (
          <React.Fragment>
            <HeaderSubtitle>
              bills of <b>{personCount}</b> add up to <b>{totalAmount}</b>
            </HeaderSubtitle>
            <HeaderActionButton>Balances</HeaderActionButton>
          </React.Fragment>
        )}
      </Header>
      <Content>
        <ContentHeader>Activities</ContentHeader>
        {props.activities.map(activity => (
          <ContentRow>
            <ActivityRecord activity={activity} />
          </ContentRow>
        ))}
        {noRecordsSoFar && <NoBillGroupRecords />}
      </Content>
      <FloatingActionButton />
    </div>
  );
};

export default connect(
  (state: State): StateProps => ({
    name: getBillGroupName(state),
    numberOfPersons: getPersonsInvolvedInBills(state).length,
    totalAmount: getTotalAmountOfBills(state),
    activities: getActivities(state),
    isBillGroupEmpty: isBillGroupEmpty(state),
  })
)(dashboard);
