import Grid from '@mui/material/Grid';
import Summary from './Summary/Summary';
import * as React from 'react';
import SuggestedFoods from './SuggestedFoods/SuggestedFoods';
import useOnlyMediumScreen from '../../../hooks/useOnlyMediumScreen';

const Home = () => {
  const onlyMediumScreen = useOnlyMediumScreen();

  return (
    <Grid container spacing={onlyMediumScreen ? 2 : 5}>
      <Grid md item>
        <Summary />
      </Grid>
      <Grid md item>
        <SuggestedFoods />
      </Grid>
    </Grid>
  );
};

export default Home;
