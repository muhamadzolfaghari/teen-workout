import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import classes from './Header.module.scss';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useSelector } from 'react-redux';
import { appSelector, useAppDispatch } from '../../../../app/hooks';
import { themeModeToggle } from '../../../../features/appSlice';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import clsx from 'clsx';
import useOnlyMediumScreen from '../../../../hooks/useOnlyMediumScreen';
import logoImage from '../../../../images/logo/logo192.png';

const Header = () => {
  const dispatch = useAppDispatch();
  const { themeMode } = useSelector(appSelector);
  const onlyMediumScreen = useOnlyMediumScreen();

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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Teen Workout
          </Typography>
        </Box>
        <IconButton sx={{ marginLeft: 'auto' }} onClick={handleThemeMode}>
          {themeMode === 'dark' ? (
            <LightModeRoundedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        {
          <IconButton>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </IconButton>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
