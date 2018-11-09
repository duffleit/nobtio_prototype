import React from 'react';
import { Button, Icon, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { History } from 'history';
import { CustomTheme } from '../../../styles/muitheme';
import ErrorState from '../../../models/ErrorState';
import AppBar from '../../../components/AppBar/AppBar';

interface Props extends StyledComponentProps {
  history: History;
  errorState: ErrorState;
}

const blockingErrorDefinitions: {
  [errorState: string]: {
    title: string;
    line1: string;
    line2: string;
    showBack?: boolean;
    showReload?: boolean;
  };
} = {
  [ErrorState.BILLGROUP_GENERALERROR]: {
    title: 'OOPS!',
    line1: 'Sorry, something went wrong.',
    line2: 'The error was logged and we will fix it!',
    showBack: true,
  },
  [ErrorState.BILLGROUP_NO_CONNECTION]: {
    title: 'OH MY...',
    line1: "We couldn't find the internet!",
    line2: 'Check your cable or refresh the page',
    showReload: true,
  },
  [ErrorState.BILLGROUP_NOT_FOUND]: {
    title: '404!',
    line1: 'These bills do not exist,',
    line2: 'or were deleted.',
  },
};

const component: React.SFC<Props> = ({ children, history, errorState, classes = {} }) => {
  const error = blockingErrorDefinitions[errorState];
  const isNonBlockingError = error === undefined;

  return isNonBlockingError ? (
    <div>{children}</div>
  ) : (
    <div>
      <AppBar history={history} noNavigation={true} />
      <div className={classes.root}>
        <div className={classes.title}>{error.title}</div>
        <div className={classes.info}>
          <div className={classes.line1}>{error.line1}</div>
          <div className={classes.line2}>{error.line2}</div>
        </div>
        {error.showBack && (
          <Button
            variant="extendedFab"
            color="secondary"
            className={classes.button}
            onClick={history.goBack}
          >
            <Icon className={classes.icon}>arrow_back</Icon>
            Go Back
          </Button>
        )}
        {error.showReload && (
          <Button
            variant="extendedFab"
            color="secondary"
            className={classes.button}
            onClick={() => location.reload(true)}
          >
            <Icon className={classes.icon}>refresh</Icon>
            Reload
          </Button>
        )}
      </div>
    </div>
  );
};

const style = (theme: Theme): StyleRules => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 80,
      flexDirection: 'column',
    },

    title: {
      fontSize: 50,
      color: theme.palette.primary.contrastText,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: (theme as CustomTheme).custom.highlightFont,
    },
    info: {
      boxShadow: `5px 5px 0px 0px ${theme.palette.grey[300]}`,
      background: 'white',
      borderRadius: 80,
      marginBottom: 20,
      padding: 20,
      textAlign: 'center',
    },
    line1: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 16,
    },
    line2: {
      fontSize: 14,
      marginTop: 5,
      lineHeight: 1.4,
    },

    button: {
      fontSize: 15,
      fontWeight: 500,
      margin: theme.spacing.unit,
    },
    icon: {
      marginRight: theme.spacing.unit,
    },
  };
};

export default withStyles(style)(component);
