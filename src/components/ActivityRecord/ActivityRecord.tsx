import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import moment from 'moment';
import React from 'react';
import BillRecord from './BillRecord';
import PaymentRecord from './PaymentRecord';
import Activity from '../../models/Activity';
import { StyleRules } from '@material-ui/core/styles';
import { CustomTheme } from '../../styles/muitheme';
import LoggerService from '../../services/LoggerService';
import ActivityType from '../../models/ActivityType';

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
        case ActivityType.Bill:
          return <BillRecord bill={activity} />;
        case ActivityType.Payment:
          return <PaymentRecord payment={activity} />;
        default:
          LoggerService.log({
            message: `ActivityType ${activity.type} is not known, and ignored`,
            activity,
          });
      }
    })()}
  </div>
);

const style = (theme: Theme): StyleRules => ({
  metadata: {
    fontSize: '.7rem',
  },
  type: {
    fontFamily: (theme as CustomTheme).custom.highlightFont,
    fontWeight: theme.typography.fontWeightMedium,
  },
  date: {
    color: fade(theme.palette.common.black, 0.5),
  },
});

export default withStyles(style)(activityRecord);
