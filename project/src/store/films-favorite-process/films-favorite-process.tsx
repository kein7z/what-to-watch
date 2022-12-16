import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsFavoriteProcess } from '../../types/state';
import { fetchFilmsFavoriteAction } from '../api-actions';

const initialState: FilmsFavoriteProcess = {
  favoriteFilms: [],
  isFilmsFavoriteLoading: false
};

export const filmsFavoriteProcess = createSlice({
  name: NameSpace.FilmsFavorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsFavoriteAction.pending, (state) => {
        state.isFilmsFavoriteLoading = true;
      })
      .addCase(fetchFilmsFavoriteAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFilmsFavoriteLoading = false;
      });
  }
});
