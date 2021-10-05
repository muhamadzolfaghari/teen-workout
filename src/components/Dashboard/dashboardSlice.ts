import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValuesType } from '../../types/ValuesType';
import { DashboardMode } from '../../lib/dashboard.const';

type DashboardModeType = ValuesType<typeof DashboardMode>;

interface IState {
  activeMode: DashboardModeType;
}

const initialState: IState = {
  activeMode: DashboardMode.HOME,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    dashboardModeChanged(state, action: PayloadAction<DashboardModeType>) {
      state.activeMode = action.payload;
    },
  },
});

export const { dashboardModeChanged } = dashboardSlice.actions;
export default dashboardSlice.reducer;
