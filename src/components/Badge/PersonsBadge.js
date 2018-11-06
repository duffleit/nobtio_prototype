import { withStyles } from '@material-ui/core';
import Badge from './Badge';
import React from 'react';
import Avatar from '../Avatar/Avatar';

export default withStyles(theme => ({
  badge: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}))(({ personNames, classes, avatarSize, showAvatar }) => {
  const numberOfPersons = personNames.length;
  const firstPersonName = personNames[0];
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
});
