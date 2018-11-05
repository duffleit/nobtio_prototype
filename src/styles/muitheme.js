import { createMuiTheme } from '@material-ui/core/styles';

let palette = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3C3298',
    },
    secondary: {
      main: '#123456',
    },
  },
  breakpoints: {
    values: {
      md: 820,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

// eslint-disable-next-line no-console
console.log('palette', palette);

export default palette;
