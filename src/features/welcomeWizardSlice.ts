import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WelcomeWizardStep } from '../lib/welcomeWizard.const';
import { Values } from '../types/Values';
import { GenderType } from '../types/GenderType';

type StepType = Values<typeof WelcomeWizardStep>;

interface CounterState {
  gender?: GenderType;
  activeStep: StepType;
}

const initialState: CounterState = {
  activeStep: WelcomeWizardStep.WELCOMING,
};

const welcomeWizardSlice = createSlice({
  name: 'welcome-wizard',
  initialState,
  reducers: {
    genderChanged(state, action: PayloadAction<GenderType>) {
      state.gender = action.payload;
    },
    activeStepChanged(state, action: PayloadAction<StepType>) {
      state.activeStep = action.payload;
    },
    stepDecremented(state) {
      state.activeStep--;
    },
  },
});

export const { genderChanged, activeStepChanged, stepDecremented } =
  welcomeWizardSlice.actions;
export default welcomeWizardSlice.reducer;
