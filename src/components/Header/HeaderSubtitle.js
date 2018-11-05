import React from 'react';
import { withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography/Typography';

let styles = theme => ({
  title: {
    fontSize: '.8rem',
    paddingTop: '.5rem',
    color: fade(theme.palette.primary.contrastText, 0.7),
  },
});

let component = ({ classes, children }) => (
  <Typography variant="h2" className={classes.title}>
    {children}
  </Typography>
);

export default withStyles(styles)(component);
