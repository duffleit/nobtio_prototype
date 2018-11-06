import React from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

const badge = ({ children, classes, avatar, className }) => {
  const hasAvatar = !!avatar;

  return (
    <span className={classNames(classes.badge, { [classes.avatarBadge]: hasAvatar }, className)}>
      {hasAvatar && avatar}
      <span className={classNames({ [classes.avatarLabel]: hasAvatar })}>{children}</span>
    </span>
  );
};

const styles = theme => ({
  badge: {
    background: theme.palette.background.paper,
    padding: `0 ${theme.spacing.unit}px`,
    borderRadius: 10,
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    alignItems: 'center',
  },
  avatarBadge: {
    paddingLeft: 0,
    display: 'flex',
    alignItems: 'center',
  },
  avatarLabel: {
    paddingLeft: 2,
  },
});

export default withStyles(styles)(badge);
