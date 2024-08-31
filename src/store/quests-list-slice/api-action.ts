import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuestsCards } from '../../type/type';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';

export const getQuestsList = createAsyncThunk<
  QuestsCards,
  undefined,
  {
    extra: AxiosInstance;
  }
>('questsList/getQuestsList', async (_arg, { extra: api }) => {
  const { data } = await api.get<QuestsCards>(ApiRoute.QUEST);
  return data;
});
