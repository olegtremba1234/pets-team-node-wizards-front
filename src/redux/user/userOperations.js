import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api/';

export const fetchUser = createAsyncThunk(
    'user/getUser',
    async(_,{rejectedWithValue })=>{
        try{
            const {data}= await axios.get("user");
            console.log(data)
            return data;
        }catch(err){
            rejectedWithValue(err)
        }
    }
)

export const currentPets = createAsyncThunk(
    'pets/getCurrentPets',
    async (_, thunkAPI) => {
      try {
        const { data } = await axios.get('pets/current');
        console.log(data);
        return data;
      } catch (err) {
        thunkAPI(err);
      }
    }
  );