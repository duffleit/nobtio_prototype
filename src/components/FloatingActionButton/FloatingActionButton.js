import Button from '@material-ui/core/Button/Button';
import Icon from '@material-ui/core/Icon/Icon';
import React from 'react';
import { withStyles } from '@material-ui/core';

export default withStyles(theme => ({
  fab: {
    position: 'fixed',
    zIndex: 1,
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
    background: theme.palette.highlightBackground,
  },
}))(({ classes, ...props }) => (
  <Button variant="fab" color="secondary" aria-label="Add" className={classes.fab} {...props}>
    <Icon>add</Icon>
  </Button>
));
