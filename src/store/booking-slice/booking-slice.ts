import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InformationQuestBooking } from '../../type/type';
import { bookAQuest, getInformationBooking } from './api-action';
type InitialStateBookingSlice = {
  infotrmationBooking: InformationQuestBooking[];
  active: string;
  loading: boolean;
  message: string;
};

const initialState: InitialStateBookingSlice = {
  infotrmationBooking: [],
  active: '',
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
    changeInformationBooking: (state) => {
      state.infotrmationBooking = [];
    },
    changeActive: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
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
        state.active = action.payload[0].id;
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
export const { changeMessage, changeInformationBooking, changeActive } =
  bookingSlice.actions;
