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
    background: theme.palette.primary.main,
    position: 'fixed',
    overflow: 'scroll',

    [theme.breakpoints.up('md')]: {
      background: theme.palette.background.paper,
    },
  },
  container: {
    maxWidth: theme.breakpoints.values.md,
    background: theme.palette.primary.main,
    minHeight: '100%',

    [theme.breakpoints.up('md')]: {
      margin: '40px auto',
      boxShadow: theme.shadows[6],
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
      minHeight: '70%',
    },
  },
});

export default withStyles(style)(component);
