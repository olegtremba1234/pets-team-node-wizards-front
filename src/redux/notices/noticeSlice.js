import { createSlice } from '@reduxjs/toolkit';
import { addNotice } from './noticeOperation';
import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  fetchUserNotices,
  fetchAllNotices,
  fetchNoticesByQuery,
  fetchNoticesByCategoryAndQuery,
  deleteOwnNoticeById,
  addNoticeToFavourite,
  deleteNoticeFromFavorite,
} from './noticeOperation';

const deleteNoticeFromFavoriteSuccessReducer = (state, action) => {
  const itemIndex = state.fetchedNotices.findIndex(
    item => item.id === action.payload
  );
  state.fetchedNotices[itemIndex].isFavorite = false;
  state.favoriteNotices = state.favoriteNotices.filter(
    item => item.id !== action.payload
  );
  state.isLoading = false;
};

const addNoticeToFavouriteSuccessReducer = (state, action) => {
  const itemIndex = state.fetchedNotices.findIndex(
    item => item.id === action.payload
  );
  state.fetchedNotices[itemIndex].isFavorite = true;
  state.favoriteNotices = [...state.favoriteNotices, action.payload];
  state.isLoading = false;
};

const fetchNoticesSuccessReducer = (state, action) => {
  state.fetchedNotices = action.payload.reverse();
  state.favoriteNotices = state.fetchedNotices.filter(item => item.isFavorite);
  state.isLoading = false;
};

const addNoticeSuccessReducer = (state, action) => {
  state.fetchedNotices.unshift(action.payload);
  state.isLoading = false;
};

const addNoticePendingReducer = state => {
  state.isLoading = true;
};

const addNoticeRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const deleteNoticeSuccessReducer = (state, action) => {
  state.fetchedNotices = state.fetchedNotices.filter(
    item => item.id !== action.payload
  );
  state.isLoading = false;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    // notices: {},
    isLoading: false,
    error: null,
    fetchedNotices: [],
    favoriteNotices: [],
  },
  extraReducers: builder =>
    builder
      .addCase(addNotice.fulfilled, addNoticeSuccessReducer)
      .addCase(addNotice.pending, addNoticePendingReducer)
      .addCase(addNotice.rejected, addNoticeRejectedReducer)
      .addCase(fetchNoticesByCategory.fulfilled, fetchNoticesSuccessReducer)
      .addCase(fetchNoticesByCategory.pending, addNoticePendingReducer)
      .addCase(fetchNoticesByCategory.rejected, addNoticeRejectedReducer)
      .addCase(fetchFavoriteNotices.fulfilled, fetchNoticesSuccessReducer)
      .addCase(fetchFavoriteNotices.pending, addNoticePendingReducer)
      .addCase(fetchFavoriteNotices.rejected, addNoticeRejectedReducer)
      .addCase(fetchUserNotices.fulfilled, fetchNoticesSuccessReducer)
      .addCase(fetchUserNotices.pending, addNoticePendingReducer)
      .addCase(fetchUserNotices.rejected, addNoticeRejectedReducer)
      .addCase(fetchAllNotices.fulfilled, fetchNoticesSuccessReducer)
      .addCase(fetchAllNotices.pending, addNoticePendingReducer)
      .addCase(fetchAllNotices.rejected, addNoticeRejectedReducer)
      .addCase(fetchNoticesByQuery.fulfilled, fetchNoticesSuccessReducer)
      .addCase(fetchNoticesByQuery.pending, addNoticePendingReducer)
      .addCase(fetchNoticesByQuery.rejected, addNoticeRejectedReducer)
      .addCase(
        fetchNoticesByCategoryAndQuery.fulfilled,
        fetchNoticesSuccessReducer
      )
      .addCase(fetchNoticesByCategoryAndQuery.pending, addNoticePendingReducer)
      .addCase(
        fetchNoticesByCategoryAndQuery.rejected,
        addNoticeRejectedReducer
      )
      .addCase(deleteOwnNoticeById.fulfilled, deleteNoticeSuccessReducer)
      .addCase(deleteOwnNoticeById.pending, addNoticePendingReducer)
      .addCase(deleteOwnNoticeById.rejected, addNoticeRejectedReducer)
      .addCase(
        addNoticeToFavourite.fulfilled,
        addNoticeToFavouriteSuccessReducer
      )
      .addCase(addNoticeToFavourite.pending, addNoticePendingReducer)
      .addCase(addNoticeToFavourite.rejected, addNoticeRejectedReducer)
      .addCase(
        deleteNoticeFromFavorite.fulfilled,
        deleteNoticeFromFavoriteSuccessReducer
      )
      .addCase(deleteNoticeFromFavorite.pending, addNoticePendingReducer)
      .addCase(deleteNoticeFromFavorite.rejected, addNoticeRejectedReducer),
});

export const noticesReduсer = noticesSlice.reducer;
