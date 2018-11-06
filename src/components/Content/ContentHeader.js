import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  header: {
    padding: theme.spacing.unit * 2,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.secondary.contrastText,
  },
});

const content = ({ children, classes }) => <div className={classes.header}>{children}</div>;

export default withStyles(styles)(content);
