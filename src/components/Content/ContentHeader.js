import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  header: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  },
});

const content = ({ children, classes }) => <div className={classes.header}>{children}</div>;

export default withStyles(styles)(content);
