import { withStyles } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';

let styles = theme => ({
  title: {
    fontFamily: "'Montserrat', 'sans-serif'",
    fontSize: '1.2rem',
    color: theme.palette.primary.contrastText,
  },
});

let component = ({ classes, children }) => (
  <Typography variant="h2" className={classes.title}>
    {children}
  </Typography>
);

export default withStyles(styles)(component);
