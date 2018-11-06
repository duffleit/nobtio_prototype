import React from 'react';
import { withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar/Avatar';
import classNames from 'classnames';

const getInitials = name => {
  const names = name.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  } else if (names[0].length > 1) {
    initials += names[0].substring(1, 2).toUpperCase();
  }
  return initials;
};

const colors = [
  '#EBDD94',
  '#DA8D93',
  '#BA99B8',
  '#D7B8A3',
  '#CD9775',
  '#DB8F5B',
  '#9E5C5D',
  '#CCD0D1',
  '#929093',
  '#A7CCDE',
  '#87A9C5',
  '#255993',
  '#89BFAF',
  '#2EA1B4',
  '#8A8A4C',
  '#587942',
];

const colorNameMap = [];

const getColor = name => {
  let index = colorNameMap.indexOf(name);
  if (index < 0) {
    index = colorNameMap.length;
    colorNameMap.push(name);
  }

  index = index % colors.length;
  return colors[index];
};

const styles = () => ({
  s: {
    width: 20,
    height: 18,
    paddingTop: 2,
    fontSize: '10px',
    color: 'black',
    fontWeight: 800,
  },
  m: {
    width: 24,
    height: 24,
    fontSize: '12px',
    color: 'black',
    fontWeight: 800,
  },
});

const component = ({ classes, name, size }) => {
  const avatarSize = size || 'm';
  const initials = getInitials(name);
  const backgroundColor = getColor(name);

  return (
    <Avatar
      className={classNames(classes.avatar, {
        [classes.s]: avatarSize === 's',
        [classes.m]: avatarSize === 'm',
      })}
      style={{ backgroundColor: backgroundColor }}
    >
      {initials}
    </Avatar>
  );
};

export default withStyles(styles)(component);
