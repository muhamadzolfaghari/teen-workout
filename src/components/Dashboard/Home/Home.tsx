import Grid from '@mui/material/Grid';
import Summary from './Summary/Summary';
import * as React from 'react';
import RecommendationFoods from './RecommendationFoods';
import useOnlyMediumScreen from '../../../hooks/useOnlyMediumScreen';

const Home = () => {
  const onlyMediumScreen = useOnlyMediumScreen();

  return (
    <Grid container spacing={onlyMediumScreen ? 2 : 5}>
      <Grid md item>
        <Summary />
      </Grid>
      <Grid md item>
        <RecommendationFoods />
      </Grid>
    </Grid>
  );
};

export default Home;
