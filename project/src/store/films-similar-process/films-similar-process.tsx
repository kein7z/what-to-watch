import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmSimilarProcess } from '../../types/state';
import { fetchFilmsSimilarAction } from '../api-actions';

const initialState: FilmSimilarProcess = {
  filmsSimilar: [],
  isFilmsSimilarLoading: false
};

export const filmsSimilarProcess = createSlice({
  name: NameSpace.FilmsSimilar,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsSimilarAction.pending, (state) => {
        state.isFilmsSimilarLoading = true;
      })
      .addCase(fetchFilmsSimilarAction.fulfilled, (state, action) => {
        state.filmsSimilar = action.payload;
        state.isFilmsSimilarLoading = false;
      });
  }
});
