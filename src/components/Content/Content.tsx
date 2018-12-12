import { withStyles, Theme, StyledComponentProps } from '@material-ui/core';
import React from 'react';

const content: React.SFC<StyledComponentProps> = ({ children, classes = {} }) => (
  <div className={classes.container}>
    <div className={classes.innerContainer}>{children}</div>
  </div>
);

const style = (theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing.unit * 2,

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 2,
    },
  },
  innerContainer: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
  },
});

export default withStyles(style)(content);
