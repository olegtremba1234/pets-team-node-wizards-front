import { createSlice } from '@reduxjs/toolkit';
import { currentUser, currentPets } from './userOperations';

const useInitialState = {
  us: {
    email: null,
    name: null,
    city: null,
    phone: null,
    dateofbirth: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,

};

const userSlice = createSlice({
  name: 'user',
  initialState: useInitialState,
  extraReducers: builder =>
    builder
      .addCase(currentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })

      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(currentPets.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(currentPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.petUser = action.payload;
      })

      .addCase(currentPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const userReducer = userSlice.reducer;
