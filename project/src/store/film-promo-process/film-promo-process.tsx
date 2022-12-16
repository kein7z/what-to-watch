import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmPromoProcess } from '../../types/state';
import { fetchFilmPromoAction } from '../api-actions';

const initialState: FilmPromoProcess = {
  filmPromo: null,
  isFilmPromoLoading: false
};

export const filmPromoProcess = createSlice({
  name: NameSpace.FilmPromo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmPromoAction.pending, (state) => {
        state.isFilmPromoLoading = true;
      })
      .addCase(fetchFilmPromoAction.fulfilled, (state, action) => {
        state.filmPromo = action.payload;
        state.isFilmPromoLoading = false;
      });
  }
});
