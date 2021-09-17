import { useMediaQuery, useTheme } from '@mui/material';

const useOnlySmallScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};

export default useOnlySmallScreen;
