import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WelcomeWizardStep } from '../lib/welcomeWizard.const';
import { Values } from '../types/Values';

type StepType = Values<typeof WelcomeWizardStep>;

interface CounterState {
  activeStep: StepType;
}

const initialState: CounterState = {
  activeStep: WelcomeWizardStep.WELCOMING
};

const welcomeWizardSlice = createSlice({
  name: 'welcome-wizard',
  initialState,
  reducers: {
    activeStepChanged(state, action: PayloadAction<StepType>) {
      state.activeStep = action.payload;
    }
  }
});

export const { activeStepChanged } = welcomeWizardSlice.actions;
export default welcomeWizardSlice.reducer;
