import { configureStore } from '@reduxjs/toolkit';
import welcomeWizardReducer from '../features/welcomeWizardSlice';

export const store = configureStore({
  reducer: {
    welcomeWizard: welcomeWizardReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
