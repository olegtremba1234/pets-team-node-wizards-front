import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';


export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/notices/my-notices', credentials);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
