import { useMediaQuery, useTheme } from '@mui/material';

const useOnlyMediumScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

export default useOnlyMediumScreen;
