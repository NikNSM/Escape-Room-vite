import { createSlice } from '@reduxjs/toolkit';
import { QuestsCards } from '../../type/type';
import { getQuestsList } from './api-action';

type InitialStateQuestsList = {
  quests: QuestsCards;
  loading: boolean;
};

const initialState: InitialStateQuestsList = {
  quests: [],
  loading: false,
};

const questsListSlice = createSlice({
  name: 'questsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestsList.fulfilled, (state, action) => {
        state.loading = false;
        state.quests = action.payload;
      })
      .addCase(getQuestsList.pending, (state) => {
        state.loading = true;
      });
  },
});

export const reducerQuestsList = questsListSlice.reducer;
