import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import IAccount from '../../../../interface/IAccount';
import useLogout from '../../../../hooks/useLogout';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useSelector } from 'react-redux';
import { appSelector, useAppDispatch } from '../../../../app/hooks';
import { themeModeToggle } from '../../../../features/appSlice';
import { dashboardModeChanged } from '../../../Dashboard/dashboardSlice';
import { DashboardMode } from '../../../../lib/dashboard.const';

export default function AccountMenu({ account }: { account: IAccount }) {
  const { logout } = useLogout();
  const dispatch = useAppDispatch();
  const { themeMode } = useSelector(appSelector);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleThemeMode = () => {
    dispatch(themeModeToggle());
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettings = () => {
    dispatch(dashboardModeChanged(DashboardMode.SETTINGS));
  };

  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick}>
            <Avatar src={account.image}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleThemeMode}>
          Dark theme: {themeMode === 'dark' ? 'On' : 'Off'}{' '}
          {themeMode === 'dark' ? (
            <DarkModeOutlinedIcon sx={{ marginLeft: 'auto' }} />
          ) : (
            <LightModeRoundedIcon sx={{ marginLeft: 'auto' }} />
          )}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
