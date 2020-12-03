import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#347e5a',
      dark: '#06291D',
    },
    secondary: {
      main: '#b19b6a',
    },

    info: {
      main: '#0070f3',
    },
    success: {
      main: '#4caf50',
    },
  },
});

/* const theme = {
  colors: {
    primary: '#0070f3',
    colorGreen: '#06291D',
    colorGreenS: '#347e5a',
    colorGrey: '#e1e1e1',
    colorYellow: '#FFBA00',
    colorYellowS: '#b19b6a',
    colorWhite: '#d1d1d1',
    colorBlack: '#0f0f0f',
  },

  error: {
      main: '#f44336',
    },
}; */

export default theme;
