import { withStyles, Theme, StyledComponentProps, ButtonBase } from '@material-ui/core';
import React from 'react';
import { StyleRules } from '@material-ui/core/styles';

const content: React.SFC<StyledComponentProps> = ({ children, classes = {} }) => (
  <ButtonBase className={classes.header}>{children}</ButtonBase>
);

const style = (theme: Theme): StyleRules => ({
  header: {
    // reset button base
    display: 'block',
    width: '100%',
    textAlign: 'left',

    fontSize: theme.typography.body2.fontSize,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit * 2,
    boxShadow: theme.shadows[10],
  },
});

export default withStyles(style)(content);
