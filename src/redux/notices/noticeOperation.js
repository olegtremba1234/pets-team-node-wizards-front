import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (formData, thunkAPI) => {
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

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchNoticesByCategory',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/by-category/${query}`);
      if (!response.data.length) {
        toast.error('Вибачте, нічого не знайдено.');
        return;
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavoriteNotices',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('/notices/my-favorites', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.data.length) {
        toast.error('Вибачте, нічого не знайдено.');
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserNotices = createAsyncThunk(
  'notices/fetchUserNotices',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('/notices/my-notices', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.data.length) {
        toast.error('Вибачте, нічого не знайдено.');
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllNotices = createAsyncThunk(
  'notices/fetchAllNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices');
      if (!response.data.length) {
        toast.error('Вибачте, нічого не знайдено.');
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesByQuery = createAsyncThunk(
  'notices/fetchNoticesByQuery',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/notices?search=${query}`);
      if (!response.data.length) {
        toast.error(
          'Вибачте, по вашому запиту нічого не знайдено. Будь ласка, уточніть свій запит'
        );
        return;
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesByCategoryAndQuery = createAsyncThunk(
  'notices/fetchNoticesByCategoryAndQuery',
  async ({ query, categoryName, token }, thunkAPI) => {
    try {
      if (token && categoryName === 'my-ads') {
        const response = await axios.get(
          `/notices/my-notices?search=${query}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!response.data.length) {
          toast.error(
            'Вибачте, по вашому запиту нічого не знайдено. Будь ласка, уточніть свій запит'
          );
          return;
        }
        return response.data;
      }
      if (token && categoryName === 'favorite-ads') {
        const response = await axios.get(
          `/notices/my-favorites?search=${query}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!response.data.length) {
          toast.error(
            'Вибачте, по вашому запиту нічого не знайдено. Будь ласка, уточніть свій запит'
          );
          return;
        }

        return response.data;
      }

      const response = await axios.get(
        `/notices/by-category/${categoryName}?search=${query}`
      );
      if (!response.data.length) {
        toast.error(
          'Вибачте, по вашому запиту нічого не знайдено. Будь ласка, уточніть свій запит'
        );
        return;
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOwnNoticeById = createAsyncThunk(
  'notices/deleteOwnNoticeById',
  async ({ id, token }, thunkAPI) => {
    try {
      await axios.delete(`/notices/my-notices/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNoticeToFavourite = createAsyncThunk(
  'notices/addNoticeToFavourite',
  async ({ id, token }, thunkAPI) => {
    try {
      await axios.post(`/notices/my-favorites/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNoticeFromFavorite = createAsyncThunk(
  'notices/deleteNoticeFromFavorite',
  async ({ id, token }, thunkAPI) => {
    try {
      await axios.delete(`/notices/my-favorites/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
