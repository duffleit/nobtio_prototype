import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon/Icon';
import React from 'react';
import PersonsBadge from '../Badge/PersonsBadge';
import Currency from '../Currency/Currency';
import Activity from '../../models/Activity';
import { StyleRules } from '@material-ui/core/styles';
import { AvatarSize } from '../Avatar/Avatar';

interface Props extends StyledComponentProps {
  payment: Activity;
}

const paymentRecord: React.SFC<Props> = ({ payment, classes = {} }) => (
  <div className={classes.payment}>
    <div className={classes.descriptionCol}>
      {
        <PersonsBadge
          showAvatar={true}
          avatarSize={AvatarSize.MEDIUM}
          names={payment.from.map(person => person.name)}
        />
      }
      <span className={classes.spacer} />
      <Icon>arrow_right_alt</Icon>
      <span className={classes.spacer} />
      {
        <PersonsBadge
          showAvatar={true}
          avatarSize={AvatarSize.MEDIUM}
          names={payment.to.map(person => person.name)}
        />
      }
    </div>
    <div>
      <span className={classes.amount}>
        <Currency amount={payment.sum} />
      </span>
    </div>
  </div>
);

const style = (theme: Theme): StyleRules => ({
  payment: {
    display: 'flex',
    alignItems: 'center',
  },
  descriptionCol: {
    flex: 1,
    display: 'flex',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit}px `,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginRight: '.5rem',
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

export default withStyles(style)(paymentRecord);
