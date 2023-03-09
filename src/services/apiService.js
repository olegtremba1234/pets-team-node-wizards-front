import axios from 'axios';

axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';
export const fetchNews = async () => {
  const response = await axios('news');
  return response.data;
};

export const fetchSearchNews = async query => {
  const response = await axios(`/news/search?title=${query}`, {});
  return response.data;
};

export const fetchOurFriends = async () => {
  const response = await axios('/friends');
  return response.data;
};
export const fetchAllNotices = async () => {
  const response = await axios.get('/notices');
  return response.data;
};

export const fetchNoticesByQuery = async query => {
  const response = await axios.get(`/notices?query=${query}`);

  return response.data;
};

export const fetchNoticesByCategory = async query => {
  const response = await axios.get(`/notices/by-category/${query}`);
  return response.data;
};

export const fetchFavoriteNotices = async token => {
  const response = await axios.get('/notices/my-favorites', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchUserNotices = async token => {
  const response = await axios.get('/notices/my-notices', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchUser = async token => {
  const res = await axios.get('/auth/current', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchUserPets = async token => {
  const res = await axios.get('/pets/current', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchUserAvatar = async (form, token) => {
  console.log(form, token)
  try {
    return await axios({
      baseURL: 'https://node-wizards-backend.onrender.com/api',
      method: 'POST',
      url: '/auth/avatar',
      data: form,

      headers: { Authorization: `Bearer ${token}` },

     
    });
  } catch (error) {
    throw error;
  }
};

export const fetchPetsDelete = async (token, id) => {
  const res = await axios.delete(`/pets/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res
};



export const fetchUseInfo  = async (data, token) => {
  try {
    return await axios({
      baseURL: 'https://node-wizards-backend.onrender.com/api',
      method: 'PATCH',
      url: '/auth/current',
      data: data,
      headers: { Authorization: `Bearer ${token}` },
      'Content-Type': 'multipart/form-data',
    });
  } catch (error) {
    throw error;
  }
};

