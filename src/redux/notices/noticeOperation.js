import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';


export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (formData,  thunkAPI) => {
    try {
      const response = await axios.post('/notices/my-notices', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
