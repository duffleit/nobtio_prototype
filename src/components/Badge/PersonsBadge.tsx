import { withStyles, Theme, StyledComponentProps } from '@material-ui/core';
import React from 'react';
import Avatar, { AvatarSize } from '../Avatar/Avatar';
import Badge from './Badge';
import { StyleRules } from '@material-ui/core/es/styles';

const style = (theme: Theme): StyleRules => ({
  badge: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

interface Props extends StyledComponentProps {
  names: string[];
  avatarSize?: AvatarSize;
  showAvatar?: boolean;
}

const component: React.SFC<Props> = ({ names, avatarSize, showAvatar = false, classes = {} }) => {
  const numberOfPersons = names.length;
  const firstPersonName = names[0];
  const onlyOnePerson = numberOfPersons === 1;

  return onlyOnePerson && showAvatar ? (
    <Badge className={classes.badge} avatar={<Avatar name={firstPersonName} size={avatarSize} />}>
      {firstPersonName}
    </Badge>
  ) : (
    <Badge className={classes.badge}>
      {onlyOnePerson ? firstPersonName : `${numberOfPersons} persons`}{' '}
    </Badge>
  );
};
export default withStyles(style)(component);
