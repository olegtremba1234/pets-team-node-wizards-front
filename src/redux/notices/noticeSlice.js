import { createSlice } from '@reduxjs/toolkit';
import { addNotice } from './noticeOperation';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
  },

    extraReducers: {
      [addNotice.pending]: state => {
        state.isLoading = true;
      },
      [addNotice.fulfilled]: (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
        state.error = null;
      },
      [addNotice.rejected]: (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      },
    }
});

export default noticesSlice.reducer;
