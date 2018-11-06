import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  header: {
    fontSize: theme.typography.body2.fontSize,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit * 2,
    boxShadow: theme.shadows[10],
  },
});

const content = ({ children, classes }) => <div className={classes.header}>{children}</div>;

export default withStyles(styles)(content);
