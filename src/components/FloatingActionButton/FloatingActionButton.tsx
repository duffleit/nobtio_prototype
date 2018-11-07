import { withStyles, Theme, StyledComponentProps } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import Icon from '@material-ui/core/Icon/Icon';
import React from 'react';
import { StyleRules } from '@material-ui/core/styles';
import { CustomTheme } from '../../styles/muitheme';

const component: React.SFC<StyledComponentProps> = ({ classes = {} }) => (
  <Button variant="fab" color="secondary" aria-label="Add" className={classes.fab}>
    <Icon>add</Icon>
  </Button>
);

const style = (theme: Theme): StyleRules => ({
  fab: {
    position: 'fixed',
    zIndex: 1,
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
    background: (theme as CustomTheme).custom.highlightBackground,
  },
});

export default withStyles(style)(component);
