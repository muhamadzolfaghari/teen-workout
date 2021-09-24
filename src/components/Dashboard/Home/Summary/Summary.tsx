import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Fab } from '@mui/material';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import * as React from 'react';
import classes from './Summary.module.scss';
import DetailsCard from './DeatilsCard/DetailsCard';
import Paper from '../../Paper/Paper';
import useOnlySmallScreen from '../../../../hooks/useOnlySmallScreen';

const Summary = () => {
  const onlySmallScreen = useOnlySmallScreen();

  return (
    <>
      <Paper>
        <header className={classes.root}>
          <Typography variant={'h4'}>Summary</Typography>
          {!onlySmallScreen && (
            <Box marginLeft={'auto'}>
              <Button variant={'contained'} color={'primary'}>
                <Box display={'flex'}>
                  <FitnessCenterOutlinedIcon />
                  <Typography>Today Workout</Typography>
                </Box>
              </Button>
            </Box>
          )}
        </header>
        <section>
          <DetailsCard />
        </section>
      </Paper>
      {onlySmallScreen && (
        <Fab color={'primary'} className={classes.fab}>
          <FitnessCenterOutlinedIcon />
        </Fab>
      )}
    </>
  );
};

export default Summary;
