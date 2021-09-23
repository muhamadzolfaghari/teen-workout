import classes from './Dashboard.module.scss';
import SimpleBottomNavigation from './Navigation/Navigation';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import * as React from 'react';
import Paper from './Paper';
import Card from './Card'
import Avatar from '@mui/material/Avatar';
import food1Image from '../../images/foods/food1.png';
import food2Image from '../../images/foods/food2.png';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import { Button, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import FullBodyDetails from './Home/FullBodyDetails/FullBodyDetails';

const Dashboard = () => {
  return (
    <>
      <SimpleBottomNavigation />
      <Container>
        <Grid container spacing={5} className={classes.grid}>
          <Grid xs item>
            <Paper className={classes.paper}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant={'h4'}>
                  Summary
                </Typography>
                <Box marginLeft={'auto'}>
                  <Button variant={'outlined'} color={'primary'}>
                    <Box display={'flex'}>
                      <FitnessCenterOutlinedIcon />
                      <Typography>Today Workout</Typography>
                    </Box>
                  </Button>
                </Box>
              </Box>
              <FullBodyDetails />
            </Paper>
          </Grid>
          <Grid xs item>
            <Paper className={classes.paper}>
              <Typography variant={'h4'} gutterBottom>
                Recommendation Foods
              </Typography>
              <Card variant={'outlined'}>
                <CardHeader
                  title={'Vegetarian Dish'}
                  subheader={'The healthy food for have a healthy body'}
                  avatar={
                    <Avatar src={food1Image} sx={{ width: 80, height: 80 }} />
                  }
                />
                <CardContent>
                  The recipe of this food include fresh vegetable, some cheese
                  and eggs, that mixed up with vegetable oil.
                </CardContent>
              </Card>
              <Card sx={{ marginTop: '1rem' }} variant={'outlined'}>
                <CardHeader
                  title={'Fish Meat'}
                  subheader={'Superb meal to get protein'}
                  avatar={
                    <Avatar src={food2Image} sx={{ width: 80, height: 80 }} />
                  }
                />
                <CardContent>
                  This meal include source of protein and the best chose for
                  whose want to get in shape after doing exercise.
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
