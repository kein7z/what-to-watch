import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { AddComment, errorAddComment } from '../types/comment-add';
import { Comments } from '../types/film-comments';
import { Films } from '../types/film-type-mock';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';

export const fetchFilmsAction = createAsyncThunk<Films[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmIdAction = createAsyncThunk<Films, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films>(`${APIRoute.Films}/${_arg}`);
    return data;
  },
);

export const fetchFilmPromoAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.PromoFilm);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comments[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Comments[]>(`${APIRoute.Comments}/${_arg}`);
    return data;
  },
);

export const fetchFilmsSimilarAction = createAsyncThunk<Films[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmsSimilar',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films[]>(`${APIRoute.Films}/${_arg}/similar`);
    return data;
  },
);

export const fetchAddCommentsAction = createAsyncThunk<errorAddComment, [(string | undefined), AddComment], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchAddComment',
  async ([filmID, { comment, rating }], { extra: api }) => {
    const { data } = await api.post<errorAddComment>(`${APIRoute.Comments}/${filmID}`, { comment, rating });
    return data;
  },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchFilmsFavoriteAction = createAsyncThunk<Films[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmsFavorite',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films[]>(APIRoute.FilmsFavorite);
    return data;
  },
);

export const patchToAddFavoriteFilmAction = createAsyncThunk<Films, {filmID: (number | undefined), status: number} , {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchAddToFavorite',
  async ({ filmID, status }, { extra: api }) => {
    const { data } = await api.post<Films>(`/favorite/${filmID}/${status}`);
    return data;
  },
  );
