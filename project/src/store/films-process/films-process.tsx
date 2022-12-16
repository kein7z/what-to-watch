import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsProcess } from '../../types/state';
import { fetchFilmsAction } from '../api-actions';

const initialState: FilmsProcess = {
  films: [],
  isFilmsLoading: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      });
  }
});
