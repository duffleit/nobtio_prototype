import { withStyles } from '@material-ui/core';
import React from 'react';

let styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    padding: 24,
    textAlign: 'center',
  },
});

let component = ({ classes, children }) => <div className={classes.container}>{children}</div>;

export default withStyles(styles)(component);
