import { createTheme, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { PropsWithChildren } from 'react';

const defaultTheme = createTheme();

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#444444',
          borderRadius: 20,
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
    },
  },
  typography: {
    fontSize: 16,
    allVariants: {
      color: '#444444',
    },
    fontFamily: 'Glory, sans-serif',
    h1: {
      fontSize: '3em',
      // paddingTop: '1.5em',
      paddingBottom: '0.67em',
      // fontWeight: defaultTheme.typography.fontWeightRegular,
    },
    h2: {
      fontSize: '2em',
      // paddingBottom: '0.9em',
      // fontWeight: defaultTheme.typography.fontWeightRegular,
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
      // fontSize: '1.1em',
      // paddingBottom: '0.7em',
      // fontWeight: defaultTheme.typography.fontWeightBold,
    },
  },
});

const cache = createCache({
  key: 'a',
  prepend: true,
});

const Theme = ({ children }: PropsWithChildren<any>) => (
  <ThemeProvider theme={theme}>
    <CacheProvider value={cache}> {children} </CacheProvider>
  </ThemeProvider>
);

export default Theme;
