import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (notices, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('https://node-wizards-backend.onrender.com/api/notices/my-notice', notices);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
