import Typography from '@mui/material/Typography/Typography';
import * as React from 'react';
import { useTheme } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

const BoldText = (props: TypographyProps) => {
  const theme = useTheme();

  return (
    <Typography
      {...props}
      fontSize={'inherit'}
      fontWeight={600}
      component={'span'}
      color={theme.palette.primary.main}
    />
  );
};

export default BoldText;
