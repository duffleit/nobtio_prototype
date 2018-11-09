import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import PersonsBadge from '../Badge/PersonsBadge';
import { StyleRules } from '@material-ui/core/styles';
import Activity from '../../models/Activity';
import Currency from '../Currency/Currency';
import { CustomTheme } from '../../styles/muitheme';

interface Props extends StyledComponentProps {
  bill: Activity;
}

const billRecord: React.SFC<Props> = ({ bill, classes = {} }) => (
  <div className={classes.bill}>
    <div className={classes.descriptionCol}>
      <div className={classes.name}>{bill.name}</div>
      <div className={classes.payment}>
        <span>paid by</span>
        <span className={classes.spacer} />
        {<PersonsBadge names={bill.from.map(person => person.name)} />}
        <span className={classes.spacer} />
        <span>for</span>
        <span className={classes.spacer} />
        {<PersonsBadge names={bill.to.map(person => person.name)} />}
      </div>
    </div>
    <div>
      <span className={classes.amount}>
        <Currency amount={bill.sum} />
      </span>
    </div>{' '}
  </div>
);

const style = (theme: Theme): StyleRules => ({
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
    fontFamily: (theme as CustomTheme).custom.highlightFont,
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

export default withStyles(style)(billRecord);
