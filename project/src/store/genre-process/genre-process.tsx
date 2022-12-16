import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { GenreProcess } from '../../types/state';

const initialState: GenreProcess = {
  genre: 'All genres',
};

export const genreProcess = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {
    setGenre: (state: GenreProcess, action: { payload: string }) => {
      state.genre = action.payload;
    }
  },
  extraReducers: {},
});

export const { setGenre } = genreProcess.actions;
