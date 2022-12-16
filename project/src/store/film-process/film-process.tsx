import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';
import { fetchFilmIdAction, patchToAddFavoriteFilmAction } from '../api-actions';

const initialState: FilmProcess = {
  film: null,
  isFilmLoading: false,
  isFilmLoadingError: false,
  isAddFavoriteFilmsLoading: true
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setFilm: (state: FilmProcess, action: { payload: null }) => {
      state.film = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmIdAction.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilmIdAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilmIdAction.rejected, (state) => {
        state.isFilmLoadingError = true;
        state.isFilmLoading = false;
      })
      .addCase(patchToAddFavoriteFilmAction.pending, (state) => {
        state.isAddFavoriteFilmsLoading = true;
      })
      .addCase(patchToAddFavoriteFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isAddFavoriteFilmsLoading = false;
      });
  }
});

export const { setFilm } = filmProcess.actions;
