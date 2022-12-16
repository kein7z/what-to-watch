import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AddCommentProcess } from '../../types/state';
import { fetchAddCommentsAction } from '../api-actions';

const initialState: AddCommentProcess = {
  reviewSubmited: false,
  isAddCommentLoading: false
};

export const addCommentProcess = createSlice({
  name: NameSpace.AddComment,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAddCommentsAction.pending, (state) => {
        state.isAddCommentLoading = true;
      })
      .addCase(fetchAddCommentsAction.fulfilled, (state, action) => {
        state.reviewSubmited = true;
        state.isAddCommentLoading = false;
      });
  }
});
