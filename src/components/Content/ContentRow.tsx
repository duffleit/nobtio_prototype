import { withStyles, Theme, StyledComponentProps } from '@material-ui/core';
import React from 'react';

const content: React.SFC<StyledComponentProps> = ({ children, classes = {} }) => (
  <div className={classes.header}>{children}</div>
);

const style = (theme: Theme) => ({
  header: {
    fontSize: theme.typography.body2.fontSize,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit * 2,
    boxShadow: theme.shadows[10],
  },
});

export default withStyles(style)(content);
