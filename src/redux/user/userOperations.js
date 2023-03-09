import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const currentUser = createAsyncThunk(
    'user/getUser',
    async(_ ,thunkAPI)=>{
        try{
            // const {auth} =thunkAPI.getState()
            const response = await axios.get('/auth/current');
            return response.data;
        }catch(err){
          return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const currentPets = createAsyncThunk(
    'pets/getCurrentPets',
    async (_id, thunkAPI) => {
      try {
        const { data } = await axios.get(`pets/current`);
        return data;
      } catch (err) {
        thunkAPI(err);
      }
    }
  );
