import React from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@material-ui/core/Icon/Icon';
import IconButtonPlaceHolder from './IconButtonPlaceHolder';
import { withStyles } from '@material-ui/core';

const canGoBack = history => {
  if (!history) return;
  let currentPath = history.location.pathname;
  const subPath = currentPath.split('/')[2] || null;

  return subPath != null;
};

const goBack = history => {
  let currentPath = history.location.pathname;
  const subPathes = currentPath.split('/');
  subPathes.pop();
  const newPath = subPathes.join('/');
  history.push(newPath);
};

const styles = {
  button: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const backButton = ({ classes, history }) => {
  return canGoBack(history) ? (
    <IconButton className={classes.button} onClick={() => goBack(history)} aria-label="Back">
      <Icon>arrow_back</Icon>
    </IconButton>
  ) : (
    <IconButtonPlaceHolder />
  );
};

export default withStyles(styles)(backButton);
