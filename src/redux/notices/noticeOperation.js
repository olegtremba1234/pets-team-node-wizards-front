import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (notices, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/notices/my-notice', notices);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
