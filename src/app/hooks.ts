import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectSelf = (state: RootState) => state;

export const welcomeWizardSelector = createSelector(
  selectSelf,
  (state) => state.welcomeWizard
);

export const appSelector = createSelector(selectSelf, (state) => state.app);

export const authSelector = createSelector(selectSelf, (state) => state.auth);

export const dashboardSelector = createSelector(
  selectSelf,
  (state) => state.dashboard
);
