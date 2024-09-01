import { createSlice } from '@reduxjs/toolkit';
import { QuestPage, QuestsCards } from '../../type/type';
import { getQuest, getQuestsList } from './api-action';

type InitialStateQuest = {
  questList: QuestsCards;
  quest: QuestPage | null;
  loadingQuestsList: boolean;
  loadingQuest: boolean;
};

const initialState: InitialStateQuest = {
  questList: [],
  quest: null,
  loadingQuestsList: false,
  loadingQuest: false,
};

const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestsList.fulfilled, (state, action) => {
        state.loadingQuestsList = false;
        state.questList = action.payload;
      })
      .addCase(getQuestsList.pending, (state) => {
        state.loadingQuestsList = true;
      })
      .addCase(getQuest.pending, (state) => {
        state.loadingQuest = true;
      })
      .addCase(getQuest.fulfilled, (state, action) => {
        state.loadingQuest = false;
        state.quest = action.payload;
      })
      .addCase(getQuest.rejected, (state) => {
        state.loadingQuest = false;
        state.quest = null;
      });
  },
});

export const reducerQuest = questSlice.reducer;
