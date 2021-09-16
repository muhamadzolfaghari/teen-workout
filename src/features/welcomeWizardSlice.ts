import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WelcomeWizardStep } from '../lib/welcomeWizard.const';
import { Values } from '../types/Values';
import { GenderType } from '../types/GenderType';
import { AgeRangeType } from '../types/AgeRangeType';

type StepType = Values<typeof WelcomeWizardStep>;


interface IState {
  height: number;
  weight: number;
  gender?: GenderType;
  activeStep: StepType;
  ageRange?: AgeRangeType;
}

const initialState: IState = {
  height: 0,
  weight: 0,
  activeStep: WelcomeWizardStep.SET_HEIGHT_WEIGHT,
};

const welcomeWizardSlice = createSlice({
  name: 'welcome-wizard',
  initialState,
  reducers: {
    stepIncremented(state) {
      state.activeStep++;
    },
    stepDecremented(state) {
      state.activeStep--;
    },
    genderChanged(state, action: PayloadAction<GenderType>) {
      state.gender = action.payload;
    },
    ageRangeChanged(state, action: PayloadAction<AgeRangeType>) {
      state.ageRange = action.payload;
    },
    heightWeightChanged(
      state,
      action: PayloadAction<[height: number, weight: number]>
    ) {
      const [height, weight] = action.payload;
      state = { ...state, height, weight };
    },
  },
});

export const {
  genderChanged,
  stepIncremented,
  stepDecremented,
  ageRangeChanged,
  heightWeightChanged,
} = welcomeWizardSlice.actions;
export default welcomeWizardSlice.reducer;
