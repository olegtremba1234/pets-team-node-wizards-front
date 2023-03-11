import axios from 'axios';

axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';

export const fetchAllNews = async () => {
  const response = await axios(`news`);
  return response.data

};

export const fetchNextNews = async page => {
  return await axios(`news/?page=${page}`);

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
  const response = await axios.get(`/notices?search=${query}`);

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

export const fetchNoticesByCategoryAndQuery = async (
  query,
  category,
  token
) => {
  if (token && category === 'my-ads') {
    const response = await axios.get(`/notices/my-notices?search=${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
  if (token && category === 'favorite-ads') {
    const response = await axios.get(`/notices/my-favorites?search=${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
  const response = await axios.get(
    `/notices/by-category/${category}?search=${query}`
  );
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
  return res;
};

export const fetchUseInfo = async (data, token) => {
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

export const postNewPet = async data => {
  const { name, birthDay, breed, comments } = data;
  const avatar = document.querySelector('#avatar');
  const formData = new FormData();

  formData.append('avatar', avatar.files[0]);
  formData.append('name', name);
  formData.append('birthDay', birthDay);
  formData.append('breed', breed);
  formData.append('comments', comments);

  const res = await axios
    .post('/pets', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(console.log)
    .catch(console.log);
  return res;
};

export const fetchNoticeById = async (id, token) => {
  const res = await axios.get(`/notices/certain/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deleteOwnNoticeById = async (id, token) => {
  const res = await axios.delete(`/notices/my-notices/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const addNoticeToFavourite = async (id, token) => {
  const res = await axios.post(`/notices/my-favorites/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res;
};
export const deleteNoticeFromFavorite = async (id, token) => {
  try {
    const res = await axios.delete(`/notices/my-favorites/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
