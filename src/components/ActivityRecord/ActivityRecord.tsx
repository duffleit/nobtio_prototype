import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import moment from 'moment';
import React from 'react';
import BillRecord from './BillRecord';
import PaymentRecord from './PaymentRecord';
import { Activity } from '../../domain/Activity';
import { StyleRules } from '@material-ui/core/styles';

interface Props extends StyledComponentProps {
  activity: Activity;
}

const activityRecord: React.SFC<Props> = ({ activity, classes = {} }) => (
  <div>
    <div className={classes.metadata}>
      <span className={classes.type}>{activity.type}</span>
      <span> · </span>
      <span className={classes.date}>{moment([2017, 0, 29]).fromNow()}</span>
    </div>

    {(() => {
      switch (activity.type) {
        case 'bill':
          return <BillRecord bill={activity} />;
        case 'payment':
          return <PaymentRecord payment={activity} />;
        default:
          return <div>error</div>;
      }
    })()}
  </div>
);

const style = (theme: Theme): StyleRules => ({
  metadata: {
    fontSize: '.7rem',
  },
  type: {
    fontFamily: "'Montserrat', 'sans-serif'",
    fontWeight: theme.typography.fontWeightMedium,
  },
  date: {
    color: fade(theme.palette.common.black, 0.5),
  },
});

export default withStyles(style)(activityRecord);
