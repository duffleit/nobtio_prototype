import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    maxWidth: theme.breakpoints.values.md,
    background: theme.palette.background.default,

    [theme.breakpoints.up('md')]: {
      margin: '40px auto',
      boxShadow: theme.shadows[6],
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
    },
  },
});
const component = ({ classes, children }) => <div className={classes.container}>{children}</div>;

export default withStyles(styles)(component);
