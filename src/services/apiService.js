import axios from 'axios';


axios.defaults.baseURL = 'https://node-wizards-backend.onrender.com/api';
export const fetchNews = async () => {
  const response = await axios('news');
  return response.data;
};

export const fetchSearchNews = async query => {
  const response = await axios(`news/title?title=${query}`)
  return response.data;
};

export const fetchOurFriends = async () => {
  const response = await axios('/friends');
  return response.data;
};

export const fetchUser =async ()=>{
  const res = await axios('/user');
  return res.data
}