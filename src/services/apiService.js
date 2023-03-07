import axios from 'axios';

axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';
export const fetchNews = async () => {
<<<<<<< HEAD
  const response = await axios('news', {});
=======
  const response = await axios('news');
>>>>>>> 5e5601637964455dc29373640b78fca9a58bcf8d
  return response.data;
};

export const fetchSearchNews = async query => {
<<<<<<< HEAD
  const response = await axios(`/news/search?title=${query}`, {});
  return response.data;
};

export const fetchNoticesByCategory = async query => {
  const response = await axios.get(`/notices/by-category/${query}`);
  console.log(response.data);
=======
  const response = await axios(`news/title?title=${query}`)
  return response.data;
};

export const fetchOurFriends = async () => {
  const response = await axios('/friends');
>>>>>>> 5e5601637964455dc29373640b78fca9a58bcf8d
  return response.data;
};
