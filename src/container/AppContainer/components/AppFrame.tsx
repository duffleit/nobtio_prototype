import { withStyles, Theme, StyledComponentProps, StyleRules } from '@material-ui/core/styles';
import React from 'react';

const component: React.SFC<StyledComponentProps> = ({ children, classes = {} }) => (
  <div className={classes.root}>
    <div className={classes.container}>{children}</div>
  </div>
);

const style = (theme: Theme): StyleRules => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    overflow: 'scroll',
    background: theme.palette.background.paper,

    [theme.breakpoints.up('md')]: {
      background: theme.palette.primary.main,
    },
  },
  container: {
    maxWidth: theme.breakpoints.values.md,

    [theme.breakpoints.up('md')]: {
      margin: '40px auto',
      overflow: 'hidden',
    },
  },
});

export default withStyles(style)(component);
