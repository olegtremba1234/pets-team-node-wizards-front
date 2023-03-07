import axios from 'axios';

axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';
export const fetchNews = async () => {
  const response = await axios('news');
  console.log(response.data, 1);
  return response.data;
};

export const fetchSearchNews = async query => {
  const response = await axios(`news/title?title=${query}`);
  console.log(response.data, 2);
  return response.data;
};

export const fetchOurFriends = async () => {
  const response = await axios('/friends');
  console.log(response.data, 3);
  return response.data;
};

// export const fetchUserInfo = async () => {
//   try {
//     const res = await axios.get('/auth/current');
//     return res.data;
//   } catch (error) {
//     console.log('error', error);
//   }
// };
