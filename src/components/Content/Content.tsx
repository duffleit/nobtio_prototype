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
    padding: theme.spacing.unit * 2,
  },
  innerContainer: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
  },
});

export default withStyles(style)(content);
