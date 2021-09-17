import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { PropsWithChildren, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { appSelector, useAppDispatch } from '../../app/hooks';
import { themeModeChanged } from '../../features/appSlice';
import { ThemeModeType } from '../../types/ThemeModeType';

const defaultTheme = createTheme();

const cache = createCache({
  key: 'a',
  prepend: true,
});

const Theme = ({ children }: PropsWithChildren<any>) => {
  const dispatch = useAppDispatch();
  const { themeMode } = useSelector(appSelector);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    const payload: ThemeModeType = prefersDarkMode ? 'dark' : 'light';
    dispatch(themeModeChanged(payload));
  }, [dispatch, prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
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
          mode: themeMode,
        },
        typography: {
          fontSize: 16,
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
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}> {children} </CacheProvider>
    </ThemeProvider>
  );
};

export default Theme;
