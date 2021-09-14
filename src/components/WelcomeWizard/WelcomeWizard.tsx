import { Paper } from '@mui/material';
import Step from './Step';
import classes from './WelcomeWizard.module.css';
import { useSelector } from 'react-redux';
import { welcomeWizardSelector } from '../../app/hooks';

const WelcomeWizard = () => {
  const { activeStep } = useSelector(welcomeWizardSelector);

  return (
    <Paper className={classes.paper} elevation={8}>
      <Step step={activeStep} />
    </Paper>
  );
};

export default WelcomeWizard;
