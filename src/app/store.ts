import { configureStore } from '@reduxjs/toolkit';
import welcomeWizardReducer from '../features/welcomeWizardSlice';
import appReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    welcomeWizard: welcomeWizardReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
