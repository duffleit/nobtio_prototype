import React from 'react';
import { withStyles } from '@material-ui/core';
import PersonsBadge from '../Badge/PersonsBadge';

const billRecord = ({ classes, bill }) => (
  <div className={classes.bill}>
    <div className={classes.descriptionCol}>
      <div className={classes.name}>{bill.name}</div>
      <div className={classes.payment}>
        <span>paid by</span>
        <span className={classes.spacer} />
        {<PersonsBadge avatarSize={'s'} personNames={bill.from.map(person => person.name)} />}
        <span className={classes.spacer} />
        <span>for</span>
        <span className={classes.spacer} />
        {<PersonsBadge avatarSize={'s'} personNames={bill.to.map(person => person.name)} />}
      </div>
    </div>
    <div className={classes.amountCol} />
  </div>
);

const styles = theme => ({
  bill: {
    display: 'flex',
    alignItems: 'center',
  },
  amount: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing.unit,
    color: theme.palette.common.black,
    fontWeight: theme.typography.fontWeightMedium,
    border: '1px solid black',
  },
  descriptionCol: {
    flex: 1,
  },
  name: {
    fontFamily: "'Montserrat', 'sans-serif'",
    fontSize: '1rem',
    padding: `${theme.spacing.unit * 1.5}px 0`,
  },
  payment: {
    fontSize: '.7rem',
    lineHeight: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    width: theme.spacing.unit / 2,
  },
});

export default withStyles(styles)(billRecord);
