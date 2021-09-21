import classes from './Dashboard.module.scss';
import SimpleBottomNavigation from './Navigation/Navigation';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import * as React from 'react';
import Paper from './Paper';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import food1Image from '../../images/foods/food1.png';
import food2Image from '../../images/foods/food2.png';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import { CardContent } from '@mui/material';

const Dashboard = () => {
  return (
    <>
      <SimpleBottomNavigation />
      <Container>
        <Grid container spacing={5} className={classes.grid}>
          <Grid xs item>
            <Paper className={classes.paper}>
              <Typography variant={'h4'}>Summary</Typography>
              <Typography variant={'h4'}>
                <FitnessCenterOutlinedIcon fontSize={'large'} /> Today Workout
              </Typography>
            </Paper>
          </Grid>
          <Grid xs item>
            <Paper className={classes.paper}>
              <Typography variant={'h4'}>Recommendation Foods</Typography>
              <Card>
                <CardContent>
                  <Avatar src={food1Image} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader avatar={<Avatar src={food2Image} />} />
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
