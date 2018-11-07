import { withStyles, StyledComponentProps } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar/Avatar';
import classNames from 'classnames';
import React from 'react';
import { nameColorProvider, initialsProvider } from './AvatarUtils';

export enum AvatarSize {
  SMALL = 's',
  MEDIUM = 'm',
}

interface PropTypes extends StyledComponentProps {
  name: string;
  size?: AvatarSize;
}

const component: React.SFC<PropTypes> = ({ name, size = AvatarSize.MEDIUM, classes = {} }) => {
  const initials = initialsProvider(name);
  const backgroundColor = nameColorProvider(name);

  return (
    <Avatar
      className={classNames(classes.avatar, {
        [classes.s as string]: size === AvatarSize.SMALL,
        [classes.m as string]: size === AvatarSize.MEDIUM,
      })}
      style={{ backgroundColor }}
    >
      {initials}
    </Avatar>
  );
};

const style = () => ({
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

export default withStyles(style)(component);
