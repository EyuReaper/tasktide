import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { kanbanApi } from '../services/kanbanApi';

export const store = configureStore({
  reducer: {
    [kanbanApi.reducerPath]: kanbanApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kanbanApi.middleware),
});

setupListeners(store.dispatch);
