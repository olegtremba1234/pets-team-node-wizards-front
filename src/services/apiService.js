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
        "Content-Type": 'multipart/form-data',
      },
    })
    .then(({ data }) => console.log(data));
  return res;
};
