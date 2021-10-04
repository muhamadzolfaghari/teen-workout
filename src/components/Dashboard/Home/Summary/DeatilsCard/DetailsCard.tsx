import FavoriteBorderOutlinedIcon
  from '@mui/icons-material/FavoriteBorderOutlined';
import CardHeader from '@mui/material/CardHeader';
import MonitorWeightOutlinedIcon
  from '@mui/icons-material/MonitorWeightOutlined';
import CardContent from '@mui/material/CardContent';
import AccessibilityNewOutlinedIcon
  from '@mui/icons-material/AccessibilityNewOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// noinspection SpellCheckingInspection
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import * as React from 'react';
import { useEffect, useState } from 'react';
import classes from './DetailsCard.module.scss';
import Divider from '@mui/material/Divider';
// noinspection SpellCheckingInspection
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import Typography from '@mui/material/Typography/Typography';
import Card from '../../../../UI/Dashboard/Card/Card';
import BoldText from '../../../../UI/BoldText';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../../../app/hooks';
import Alert, { AlertColor } from '@mui/material/Alert';
import { CircularProgress, useTheme } from '@mui/material';
import CheckCircleOutlineOutlinedIcon
  from '@mui/icons-material/CheckCircleOutlineOutlined';

const DetailsCard = () => {
  const theme = useTheme();
  let [bmi, setBmi] =
    useState<{ value: number; message: string; severity: AlertColor }>();
  const { profile } = useSelector(authSelector);

  useEffect(() => {
    if (!profile) return;

    let message: string;
    let severity: AlertColor;
    let value = Math.pow(profile.height, 2) / profile.weight;

    if (value < 18.5) {
      severity = 'info';
      message =
        'You weight less than the standard amount. You need to have more nutrition and more proper. Do not worry, just eat the selected diet.';
    } else if (value < 24.9 && value > 18.4) {
      severity = 'success';
      message =
        'Your fitness is great! It is better to maintain this fitness by following a diet and exercise.';
    } else if (value < 29.9 && value > 24.8) {
      severity = 'warning';
      message =
        'No it is not good! You are overweight and you need to return to a healthy and normal weight range with proper exercise and diet.';
    } else {
      severity = 'error';
      message =
        'This is not good at all!! You are in the dangerous range of the standard body mass index and it indicates that you are obese. If you do not lose weight, you may face a variety of problems and diseases such as diabetes, cardiovascular disease, high cholesterol, etc. You should start exercising and eating right as soon as possible.';
    }

    setBmi({ value, message, severity });
  }, [profile]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={'Full body details'}
        subheader={'See the health and information about body'}
      />
      <CardContent>
        <section className={classes['general-details']}>
          <AccessibilityNewOutlinedIcon color={'primary'} />
          <div>
            You have practiced for <BoldText>700</BoldText> minutes
          </div>
          <FastfoodOutlinedIcon color={'primary'} />
          <div>
            You received <BoldText>1500</BoldText> Calories
          </div>
          <HotelOutlinedIcon color={'primary'} />
          <div>
            You slept for <BoldText>7.5</BoldText> hours
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
            124
          </Typography>

          <Typography
            variant={'h6'}
            display={'flex'}
            fontWeight={'bold'}
            alignItems={'center'}
            justifyContent={'center'}
            color={bmi ? theme.palette[bmi.severity].main : ''}
          >
            {bmi ? (
              <>
                {['info', 'warning', 'error'].includes(bmi.severity) && (
                  <InfoOutlinedIcon />
                )}
                {bmi.severity === 'success' && (
                  <CheckCircleOutlineOutlinedIcon />
                )}{' '}
                {bmi.value}
              </>
            ) : (
              <CircularProgress size={22} />
            )}
          </Typography>
        </section>
        {bmi && <Alert severity={bmi.severity}>{bmi.message}</Alert>}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;

