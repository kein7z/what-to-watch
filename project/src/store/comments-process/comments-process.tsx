import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CommentsProcess } from '../../types/state';
import { fetchCommentsAction } from '../api-actions';

const initialState: CommentsProcess = {
  comments: [],
  isCommentsLoading: false
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
      });
  }
});
