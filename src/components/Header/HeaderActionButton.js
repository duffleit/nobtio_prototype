import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core';

export default withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '10px 30px',
    marginTop: '1rem',
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})(Button);
