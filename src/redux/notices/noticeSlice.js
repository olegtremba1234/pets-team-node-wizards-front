import { createSlice } from '@reduxjs/toolkit';
import { addNotice } from './noticeOperation';

const addNoticeSuccessReducer = (state, action) => {
  state.notices = action.payload;
  state.isLoading = false;
};

const addNoticePendingReducer = state => {
  state.isLoading = true;
};

const addNoticeRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(addNotice.fulfilled, addNoticeSuccessReducer)
      .addCase(addNotice.pending, addNoticePendingReducer)
      .addCase(addNotice.rejected, addNoticeRejectedReducer),
});

export const noticesReduсer = noticesSlice.reducer;
