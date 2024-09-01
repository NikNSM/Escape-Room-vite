import { createSlice } from '@reduxjs/toolkit';
import { AutorizationStatus } from '../../const';
import {
  autorizationUser,
  checkStatusAutorization,
  logOutUser,
} from './api-action';
type InitialStateUserSlice = {
  status: AutorizationStatus;
  loading: boolean;
  userEmail: string;
};

const initialState: InitialStateUserSlice = {
  status: AutorizationStatus.UNKNOW,
  loading: false,
  userEmail: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkStatusAutorization.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkStatusAutorization.fulfilled, (state, action) => {
        state.loading = false;
        state.userEmail = action.payload;
        state.status = AutorizationStatus.AUTORIZATION;
      })
      .addCase(checkStatusAutorization.rejected, (state) => {
        state.loading = false;
        state.status = AutorizationStatus.NOT_AUTORIZATION;
      })
      .addCase(autorizationUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(autorizationUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userEmail = action.payload;
        state.status = AutorizationStatus.AUTORIZATION;
      })
      .addCase(autorizationUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logOutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.loading = false;
        state.status = AutorizationStatus.NOT_AUTORIZATION;
        state.userEmail = '';
      })
      .addCase(logOutUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const reducerUser = userSlice.reducer;
