import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserLogin, UserPostLogin } from '../../type/type';
import { AxiosInstance } from 'axios';
import { RouteAdresses } from '../../const';
import { dropToken, saveToken } from '../../api/token';

export const checkStatusAutorization = createAsyncThunk<
  string,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkStatusAutorization', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserLogin>(RouteAdresses.LOGIN);
  saveToken(data.token);
  return data.email;
});

export const autorizationUser = createAsyncThunk<
  string,
  UserPostLogin,
  {
    extra: AxiosInstance;
  }
>('user/autorizationUser', async (arg, { extra: api }) => {
  const { data } = await api.post<UserLogin>(RouteAdresses.LOGIN, arg);
  saveToken(data.token);
  return data.email;
});

export const logOutUser = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/logOut', async (_arg, { extra: api }) => {
  await api.delete(RouteAdresses.LOGOUT);
  dropToken();
});
