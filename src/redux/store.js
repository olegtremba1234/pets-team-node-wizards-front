import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import { authReduсer } from './auth/authSlice';
import { noticesReduсer } from './notices/noticeSlice';

export const store = configureStore({
  reducer: {
    auth: authReduсer,
    notices: noticesReduсer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
