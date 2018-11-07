import { Theme, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import { StyleRules } from '@material-ui/core/styles';
import { CustomTheme } from '../../styles/muitheme';

const style = (theme: Theme): StyleRules => ({
  root: {
    background: (theme as CustomTheme).custom.highlightBackground,
    borderRadius: theme.shape.borderRadius,
    border: 0,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px`,
    marginTop: '1rem',
    color: theme.palette.secondary.contrastText,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightMedium,
  },
});

export default withStyles(style)(Button);
