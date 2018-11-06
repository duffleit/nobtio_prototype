import React from 'react';
import { withStyles } from '@material-ui/core';
import BillRecord from './BillRecord';
import PaymentRecord from './PaymentRecord';
import { fade } from '@material-ui/core/styles/colorManipulator';
import moment from 'moment';

const transactionRecord = ({ classes, transaction }) => (
  <div>
    <div className={classes.metadata}>
      <span className={classes.type}>{transaction.type}</span>
      <span> · </span>
      <span className={classes.date}>{moment([2017, 0, 29]).fromNow()}</span>
    </div>

    {(function() {
      switch (transaction.type) {
        case 'bill':
          return <BillRecord bill={transaction} />;
        case 'payment':
          return <PaymentRecord payment={transaction} />;
        default:
          return <div>error</div>;
      }
    })()}
  </div>
);

const styles = theme => ({
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

export default withStyles(styles)(transactionRecord);
