import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api/api';
import { reducerQuest } from './quest-slice/quest-slice';
import { reducerUser } from './user-slice/user-slice';
import { redirect } from './middleware/redirect-middleware';

const api = createApi();
export const rootReducer = combineReducers({
  quest: reducerQuest,
  user: reducerUser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
