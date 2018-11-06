import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 2,
  },
  innerContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
  },
});

const content = ({ children, classes }) => (
  <div className={classes.container}>
    <div className={classes.innerContainer}>{children}</div>
  </div>
);

export default withStyles(styles)(content);
