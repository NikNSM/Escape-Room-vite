import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  InformationPostBookingUser,
  InformationQuestBooking,
} from '../../type/type';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { changeMessage } from './booking-slice';
import { TypeAppDispatch } from '../../type/type-redux';

const clearMessage = createAsyncThunk(
  'bookin/clearMessage',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(changeMessage()), 5000);
  }
);

export const getInformationBooking = createAsyncThunk<
  InformationQuestBooking[],
  string,
  {
    extra: AxiosInstance;
  }
>('booking/getInformationBooking', async (id, { extra: api }) => {
  const { data } = await api.get<InformationQuestBooking[]>(
    `${ApiRoute.QUEST}/${id}${ApiRoute.BOOKING}`
  );
  return data;
});

export const bookAQuest = createAsyncThunk<
  void,
  InformationPostBookingUser,
  {
    dispatch: TypeAppDispatch;
    extra: AxiosInstance;
  }
>('booking/bookAQues', async (data, { dispatch, extra: api }) => {
  try {
    const { id, ...dataBooking } = data;
    await api.post(`${ApiRoute.QUEST}/${id}/${ApiRoute.BOOKING}`, dataBooking);
    dispatch(clearMessage());
  } catch {
    dispatch(clearMessage());
  }
});
