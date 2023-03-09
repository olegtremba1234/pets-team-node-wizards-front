import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';


export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (body, file,  thunkAPI) => {

   if(body.category === 'in-good-hands' || body.category === 'lost-found' ) {
     body.price = '0'
  }
    try {
      const response = await axios.post('/notices/my-notices', body, file);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
