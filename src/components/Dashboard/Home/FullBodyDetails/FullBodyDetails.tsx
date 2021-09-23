import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CardHeader from '@mui/material/CardHeader';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import CardContent from '@mui/material/CardContent';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
// noinspection SpellCheckingInspection
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import * as React from 'react';
import classes from './FullBodyDetails.module.scss';
import Divider from '@mui/material/Divider';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import Typography from '@mui/material/Typography/Typography';
import { Alert, useTheme } from '@mui/material';
import Card from '../../Card';

const FullBodyDetails = () => {
  const theme = useTheme();

  return (
    <Card variant={'outlined'} className={classes.root}>
      <CardHeader
        title={'Full body details'}
        subheader={'See the health and information about body'}
      />
      <CardContent>
        <section className={classes['general-details']}>
          <AccessibilityNewOutlinedIcon color={'primary'} />
          <div>
            You have practiced for <mark>700</mark> minutes
          </div>
          <FastfoodOutlinedIcon color={'primary'} />
          <div>
            You received <mark>1500</mark> Calories
          </div>
          <HotelOutlinedIcon color={'primary'} />
          <div>
            You slept for <mark>7.5</mark> hours
          </div>
        </section>
        <Divider className={classes.divider} />
        <section className={classes['health-details']}>
          <div className={classes['health-item']}>
            <BloodtypeOutlinedIcon color={'primary'} />
            <Typography>BP</Typography>
          </div>
          <div className={classes['health-item']}>
            <FavoriteBorderOutlinedIcon color={'primary'} />

            <Typography>Heart Rate</Typography>
          </div>
          <div className={classes['health-item']}>
            <MonitorWeightOutlinedIcon color={'primary'} />
            <Typography>BMI</Typography>
          </div>
          <Typography
            variant={'h6'}
            fontWeight={'bold'}
            color={theme.palette.success.main}
          >
            124
          </Typography>
          <Typography
            variant={'h6'}
            fontWeight={'bold'}
            color={theme.palette.warning.main}
          >
            102
          </Typography>
          <Typography
            variant={'h6'}
            fontWeight={'bold'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            color={theme.palette.error.main}
          >
            <WarningAmberOutlinedIcon /> 31
          </Typography>
        </section>
        <Alert severity={'error'}>
          Be patient Ali, you should go doctor to check your heart and try to
          lose your weight or increase your height...
        </Alert>
      </CardContent>
    </Card>
  );
};

export default FullBodyDetails;
