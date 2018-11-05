import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButtonPlaceHolder from './IconButtonPlaceHolder';
import BackButton from './BackButton';

const StyledAppBar = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      position: 'static',
    },
  },
}))(AppBar);

const styles = theme => ({
  toolbar: {
    justifyContent: 'center',
  },
  label: {
    flexGrow: 2,
    textAlign: 'center',
    fontFamily: "'Montserrat', 'sans-serif'",
    color: theme.palette.primary.contrastText,
  },
  spacer: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const component = ({ classes, history }) => (
  <div>
    <StyledAppBar position="fixed">
      <Toolbar>
        <BackButton history={history} />
        <Typography className={classes.label}>bill.io</Typography>
        <IconButtonPlaceHolder />
      </Toolbar>
    </StyledAppBar>
    <div className={classes.spacer} />
  </div>
);

export default withStyles(styles)(component);
