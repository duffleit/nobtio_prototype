import React from 'react';
import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { LoadingState } from '../../../models/LoadingState';
import AppBar from '../../../components/AppBar/AppBar';
import { History } from 'history';

interface Props extends StyledComponentProps {
  loadingState: LoadingState;
  history: History;
}

const blockingLoadingDefinitions: {
  [loadingState: string]: { title: string };
} = {
  [LoadingState.BILLGROUP_LOADING]: {
    title: 'Loading your bills',
  },
};

const component: React.SFC<Props> = ({ children, loadingState, history, classes = {} }) => {
  const loading = blockingLoadingDefinitions[loadingState];
  const isNonBlockingLoading = loading === undefined;

  return isNonBlockingLoading ? (
    <div>{children}</div>
  ) : (
    <div>
      <AppBar history={history} noNavigation={true} />
      <div className={classes.root}>
        <div className={classes.spinner} />
        <div className={classes.title}>{loading.title}</div>
      </div>
    </div>
  );
};

const style = (theme: Theme): StyleRules => {
  const foreground = theme.palette.primary.contrastText;
  const borderWidth = 4;
  const basicSpinnerDimension = 125;

  const mainSpinnerDimensions = basicSpinnerDimension - borderWidth * 2;
  const smallSpinnerDimensions = mainSpinnerDimensions * 0.7;

  return {
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)',
      },

      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 100,
      flexDirection: 'column',
    },
    title: {
      marginTop: 30,
      fontSize: '.8rem',
      color: foreground,
      fontWeight: 'bold',
    },
    spinner: {
      position: 'relative',
      width: basicSpinnerDimension,
      height: basicSpinnerDimension,

      '&:after, &:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        borderWidth,
        borderStyle: 'solid',
        borderRadius: '50%',
      },

      '&:before': {
        width: mainSpinnerDimensions,
        height: mainSpinnerDimensions,
        borderColor: foreground,
        top: 0,
        left: 0,
        overflow: 'hidden',
      },

      '&:after': {
        width: smallSpinnerDimensions * 0.2,
        height: smallSpinnerDimensions * 0.2,
        borderColor: foreground,
        borderWidth: borderWidth - 1,
        top: mainSpinnerDimensions / 2 - borderWidth * 2,
        left: 0,
        overflow: 'hidden',
        transformOrigin: `${mainSpinnerDimensions / 2 + borderWidth}px`,
        animation: 'rotate 1.2s linear 0s infinite',
      },
    },
  };
};

export default withStyles(style)(component);
