import React from 'react';
import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { StyleRules } from '@material-ui/core/es/styles';

interface Props extends StyledComponentProps {
  avatar?: JSX.Element;
  className?: string;
}

const badge: React.SFC<Props> = ({ children, avatar, className, classes = {} }) => {
  const hasAvatar = !!avatar;

  return (
    <span
      className={classNames(
        classes.badge,
        { [classes.avatarBadge as string]: hasAvatar },
        className
      )}
    >
      {hasAvatar && avatar}
      <span className={classNames({ [classes.avatarLabel as string]: hasAvatar })}>{children}</span>
    </span>
  );
};

const style = (theme: Theme): StyleRules => ({
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

export default withStyles(style)(badge);
