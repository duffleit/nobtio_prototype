import React from 'react';
import { withStyles } from '@material-ui/core';
import Currency from '../Currency/Currency';
import PersonsBadge from '../Badge/PersonsBadge';
import Icon from '@material-ui/core/Icon/Icon';

const paymentRecord = ({ classes, payment }) => (
  <div className={classes.payment}>
    <div className={classes.descriptionCol}>
      {<PersonsBadge showAvatar={true} personNames={payment.from.map(person => person.name)} />}
      <span className={classes.spacer} />
      <Icon>arrow_right_alt</Icon>
      <span className={classes.spacer} />
      {<PersonsBadge showAvatar={true} personNames={payment.to.map(person => person.name)} />}
    </div>
    <div className={classes.amountCol}>
      <span className={classes.amount}>
        <Currency amount={payment.totalAmount} />
      </span>
    </div>
  </div>
);

const styles = theme => ({
  payment: {
    display: 'flex',
    alignItems: 'center',
  },
  descriptionCol: {
    flex: 1,
    display: 'flex',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit}px `,
  },
  amount: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing.unit,
    color: theme.palette.common.black,
    fontWeight: theme.typography.fontWeightMedium,
    border: '1px solid black',
  },
  spacer: {
    width: theme.spacing.unit / 2,
  },
});

export default withStyles(styles)(paymentRecord);
