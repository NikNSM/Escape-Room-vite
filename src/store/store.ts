import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api/api';
import { reducerQuest } from './quest-slice/quest-slice';
import { reducerUser } from './user-slice/user-slice';

const api = createApi();

export const store = configureStore({
  reducer: {
    quest: reducerQuest,
    user: reducerUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
