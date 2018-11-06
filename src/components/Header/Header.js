import { withStyles } from '@material-ui/core';
import React from 'react';

let styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
    textAlign: 'center',
  },
});

let component = ({ classes, children }) => <div className={classes.container}>{children}</div>;

export default withStyles(styles)(component);
