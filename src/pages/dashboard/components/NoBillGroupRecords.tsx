import { withStyles, Theme, StyledComponentProps } from '@material-ui/core';
import React from 'react';
import { StyleRules } from '@material-ui/core/es/styles';
import Icon from '@material-ui/core/Icon/Icon';
import HeaderActionButton from '../../../components/Header/HeaderActionButton';

const component: React.SFC<StyledComponentProps> = ({ classes = {} }) => (
  <div className={classes.root}>
    <div>
      <Icon className={classes.icon}>face</Icon>
    </div>
    <div className={classes.header}>It's very empty here!</div>
    <div>
      <HeaderActionButton>Add your first bill</HeaderActionButton>
    </div>
  </div>
);

const style = (theme: Theme): StyleRules => ({
  root: {
    background: theme.palette.background.paper,
    padding: '3rem',
    textAlign: 'center',
  },
  icon: {
    fontSize: '4rem',
  },
  header: {
    padding: '.5rem 0',
    fontWeight: 'bold',
  },
});

export default withStyles(style)(component);
