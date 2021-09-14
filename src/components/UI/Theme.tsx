import { createTheme, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { FC } from 'react';

const defaultTheme = createTheme();

export const theme = createTheme({
  direction: 'rtl',
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#ff5722',
    },
  },

  typography: {
    fontSize: 12.5,
    fontWeightMedium: 600,
    fontFamily: 'Glory, sans-serif',
    h1: {
      fontSize: '3em',
      // paddingTop: '1.5em',
      paddingBottom: '0.67em',
      // fontWeight: defaultTheme.typography.fontWeightRegular,
    },
    h2: {
      fontSize: '2em',
      paddingBottom: '0.9em',
      fontWeight: defaultTheme.typography.fontWeightRegular,
    },
    h3: {
      fontSize: '1.5em',
      paddingBottom: '0.89em',
      fontWeight: defaultTheme.typography.fontWeightBold,
    },
    h4: {
      fontSize: '1.25em',
      paddingBottom: '0.8em',
      fontWeight: defaultTheme.typography.fontWeightBold,
    },
    h5: {
      fontSize: '1.1em',
      paddingBottom: '0.7em',
      fontWeight: defaultTheme.typography.fontWeightBold,
    },
  },
});

const cache = createCache({
  key: 'a',
  prepend: true,
});

const Theme: FC = (props) => (
  <ThemeProvider theme={theme}>
    <CacheProvider value={cache}> {props.children} </CacheProvider>
  </ThemeProvider>
);

export default Theme;
