import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, currentPets } from './userOperations';

const useInitialState = {
  user: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: useInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.items = action.payload;
      })

      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(currentPets.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(currentPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addCase(currentPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const userReducer = userSlice.reducer;
