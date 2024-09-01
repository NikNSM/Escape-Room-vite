import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserLogin, UserPostLogin } from '../../type/type';
import { AxiosInstance } from 'axios';
import { RouteAdresses } from '../../const';
import { dropToken, saveToken } from '../../api/token';
import { TypeAppDispatch } from '../../type/type-redux';
import { redirectToRoute } from '../middleware/action/action';

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
    dispatch: TypeAppDispatch;
  }
>('user/autorizationUser', async (arg, { extra: api, dispatch }) => {
  const { pathName, ...user } = arg;
  const { data } = await api.post<UserLogin>(RouteAdresses.LOGIN, user);
  saveToken(data.token);
  dispatch(redirectToRoute(pathName));
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
