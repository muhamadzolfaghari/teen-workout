import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useSelector } from 'react-redux';
import { appSelector, useAppDispatch } from '../../../../app/hooks';
import { themeModeToggle } from '../../../../features/appSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const { themeMode } = useSelector(appSelector);

  const handleThemeMode = () => {
    dispatch(themeModeToggle());
  };

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Teen Workout
            </Typography>
            <code>v1.0.0</code>
          </Box>
          <IconButton onClick={handleThemeMode}>
            {themeMode === 'dark' ? (
              <LightModeRoundedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
