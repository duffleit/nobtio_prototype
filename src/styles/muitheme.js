import { createMuiTheme } from '@material-ui/core/styles';

let palette = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3C3298',
    },
    secondary: {
      main: '#373F51',
    },
    highlightBackground: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  breakpoints: {
    values: {
      md: 820,
    },
  },
  typography: {
    useNextVariants: true,
  },
  spacing: {
    unit: 6,
  },
});

// eslint-disable-next-line no-console
console.log('palette', palette);

export default palette;
