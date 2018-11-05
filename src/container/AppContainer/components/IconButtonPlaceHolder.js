import React from 'react';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@material-ui/core/Icon/Icon';

export default withStyles({
  root: {
    marginLeft: -12,
    marginRight: 20,
    visibility: 'hidden',
  },
})(({ classes }) => (
  <IconButton className={classes.root} disabled={true} color="inherit">
    <Icon>arrow_back</Icon>
  </IconButton>
));
