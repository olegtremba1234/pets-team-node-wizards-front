import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';


export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/notices/my-notices', credentials);
      token.set(response.data.accessToken);
      console.log(response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
