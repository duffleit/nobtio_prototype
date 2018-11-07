import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import { StyleRules } from '@material-ui/core/styles';

const style = (theme: Theme): StyleRules => ({
  title: {
    fontFamily: "'Montserrat', 'sans-serif'",
    fontSize: '1.2rem',
    color: theme.palette.primary.contrastText,
  },
});

const component: React.SFC<StyledComponentProps> = ({ children, classes = {} }) => (
  <Typography variant="h2" className={classes.title}>
    {children}
  </Typography>
);

export default withStyles(style)(component);
