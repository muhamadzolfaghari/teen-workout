import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import classes from './Header.module.scss';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import {
  appSelector,
  authSelector,
  useAppDispatch,
} from '../../../../app/hooks';
import clsx from 'clsx';
import useOnlyMediumScreen from '../../../../hooks/useOnlyMediumScreen';
import logoImage from '../../../../images/logo/logo192.png';
import AccountMenu from './AccountMenu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { themeModeToggle } from '../../../../features/appSlice';

const Header = () => {
  const { account } = useSelector(authSelector);
  const onlyMediumScreen = useOnlyMediumScreen();
  const dispatch = useAppDispatch();
  const { themeMode } = useSelector(appSelector);

  const handleThemeMode = () => {
    dispatch(themeModeToggle());
  };

  return (
    <AppBar
      position="static"
      className={clsx(classes.root, onlyMediumScreen && classes['sm'])}
    >
      <Toolbar className={classes.toolbar}>
        <img src={logoImage} alt={'Website logo'} className={classes.logo} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textTransform: 'uppercase',
          }}
        >
          <Typography variant="h5" component="div">
            Teen Workout
          </Typography>
        </Box>
        <IconButton onClick={handleThemeMode} sx={{ marginLeft: 'auto' }}>
          {themeMode === 'light' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </IconButton>
        {account && <AccountMenu account={account} />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
