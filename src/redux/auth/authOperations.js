import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = message => {
  toast.warn(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};

axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responseRegister = await axios.post('/auth/register', credentials);
      setAuthHeader(responseRegister.data.token);

      const loginBody = {
        email: credentials.email,
        password: credentials.password,
      };

      const responseLogin = await axios.post('/auth/login', loginBody);
      setAuthHeader(responseLogin.data.accessToken);
      return responseLogin.data;
    } catch (error) {
      console.log(error.message);
      notify('Email in use');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      setAuthHeader(response.data.accessToken);
      return response.data;
    } catch (error) {
      notify('Incorrect email or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return alert('Sorry, there was a login error');
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHeader(token);

    try {
      const response = await axios.get('/auth/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Unauthorized');
    }
  }
);
