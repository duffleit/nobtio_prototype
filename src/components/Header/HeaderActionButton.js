import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core';

export default withStyles(theme => ({
  root: {
    background: theme.palette.highlightBackground,
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
}))(Button);
