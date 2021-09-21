import classes from './Dashboard.module.scss';
import SimpleBottomNavigation from './Navigation/Navigation';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import * as React from 'react';
import Paper from './Paper';
import Card  from '@mui/material/Card';
import Avatar  from '@mui/material/Avatar';

  const Dashboard = () => {
  return (
    <>
      <SimpleBottomNavigation />
      <Grid container className={classes.grid} spacing={5}>
        <Grid xs={5} item>
          <Paper className={classes.paper}>
            <Typography variant={'h4'}>Summary</Typography>
            <Typography variant={'h1'}>
              <FitnessCenterOutlinedIcon fontSize={'large'} /> Today Workout
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper className={classes.paper}>
            <Card>
              <Avatar/>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
