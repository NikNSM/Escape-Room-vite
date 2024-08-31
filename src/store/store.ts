import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api/api';
import { reducerQuest } from './quest-slice/quest-slice';

const api = createApi();

export const store = configureStore({
  reducer: {
    quest: reducerQuest,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
