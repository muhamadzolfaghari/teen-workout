import MuiPaper, { PaperProps } from '@mui/material/Paper';

const Paper = (props: PaperProps) => (
  <MuiPaper {...props} elevation={5} sx={{ borderRadius: '20px' }} />
);

export default Paper;