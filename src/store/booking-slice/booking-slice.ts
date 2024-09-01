import { createSlice } from '@reduxjs/toolkit';
import { InformationQuestBooking } from '../../type/type';
import { bookAQuest, getInformationBooking } from './api-action';
type InitialStateBookingSlice = {
  infotrmationBooking: InformationQuestBooking[];
  loading: boolean;
  message: string;
};

const initialState: InitialStateBookingSlice = {
  infotrmationBooking: [],
  loading: false,
  message: '',
};
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    changeMessage: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInformationBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInformationBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.infotrmationBooking = action.payload;
      })
      .addCase(bookAQuest.pending, (state) => {
        state.loading = true;
      })
      .addCase(bookAQuest.fulfilled, (state) => {
        state.loading = false;
        state.message = 'Квест забронирован';
      })
      .addCase(bookAQuest.rejected, (state) => {
        state.loading = false;
        state.message =
          'При бронирование проищошла. Вы можете попробовать снова либо обратится к нам напрямую чере контакты';
      });
  },
});

export const reducerBooking = bookingSlice.reducer;
export const { changeMessage } = bookingSlice.actions;
