import Typography from '@mui/material/Typography';
import Card from '../../../UI/Dashboard/Card/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import food1Image from '../../../../images/foods/food1.png';
import CardContent  from '@mui/material/CardContent';
import food2Image from '../../../../images/foods/food2.png';
import Paper from '../../../UI/Dashboard/Paper/Paper';
import * as React from 'react';
import Box from '@mui/material/Box';

const SuggestedFoods = () => (
  <Paper>
    <Typography variant={'h4'} gutterBottom>
      Recommendation Foods
    </Typography>
    <Card>
      <CardHeader
        title={'Vegetarian Dish'}
        subheader={'The healthy food for have a healthy body'}
        avatar={<Avatar src={food1Image} sx={{ width: 80, height: 80 }} />}
      />
      <CardContent>
        The recipe of this food include fresh vegetable, some cheese and eggs,
        that mixed up with vegetable oil.
      </CardContent>
    </Card>
    <Box marginTop={'1rem'} />
    <Card>
      <CardHeader
        title={'Fish Meat'}
        subheader={'Superb meal to get protein'}
        avatar={<Avatar src={food2Image} sx={{ width: 80, height: 80 }} />}
      />
      <CardContent>
        This meal include source of protein and the best chose for whose want to
        get in shape after doing exercise.
      </CardContent>
    </Card>
  </Paper>
);

export default SuggestedFoods;
