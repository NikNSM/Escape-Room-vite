import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api/api';
import { reducerQuestsList } from './quests-list-slice/quests-list-slice';

const api = createApi();

export const store = configureStore({
  reducer: {
    questsList: reducerQuestsList,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
