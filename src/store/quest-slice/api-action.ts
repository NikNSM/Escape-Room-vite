import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuestPage, QuestsCards } from '../../type/type';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';

export const getQuestsList = createAsyncThunk<
  QuestsCards,
  undefined,
  {
    extra: AxiosInstance;
  }
>('quest/getQuestsList', async (_arg, { extra: api }) => {
  const { data } = await api.get<QuestsCards>(ApiRoute.QUEST);
  return data;
});

export const getQuest = createAsyncThunk<
  QuestPage,
  string,
  {
    extra: AxiosInstance;
  }
>('quest/getQuest', async (id, { extra: api }) => {
  const { data } = await api.get<QuestPage>(`${ApiRoute.QUEST}/${id}`);
  return data;
});
