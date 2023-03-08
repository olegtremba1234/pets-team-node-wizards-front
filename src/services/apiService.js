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


export const addNotice = async body => {
  
  try {
    const response = await axios.post('/notices/my-notices', body)
  return response.data;
  } catch(error) {
    console.log(error)
  }

};
