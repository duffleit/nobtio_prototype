import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    background: theme.palette.primary.main,
    position: 'fixed',

    [theme.breakpoints.up('md')]: {
      background: theme.palette.background.paper,
    },
  },
  container: {
    maxWidth: theme.breakpoints.values.md,
    background: theme.palette.primary.main,
    position: 'relative',
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
const component = ({ classes, children }) => (
  <div class={classes.root}>
    <div className={classes.container}>{children}</div>
  </div>
);

export default withStyles(styles)(component);
