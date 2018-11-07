import { withStyles, Theme, StyledComponentProps } from '@material-ui/core';
import React from 'react';

const content: React.SFC<StyledComponentProps> = ({ children, classes = {} }) => (
  <div className={classes.header}>{children}</div>
);

const style = (theme: Theme) => ({
  header: {
    padding: theme.spacing.unit * 2,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.secondary.contrastText,
  },
});

export default withStyles(style)(content);
