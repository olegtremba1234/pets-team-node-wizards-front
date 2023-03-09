import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://node-wizards-backend.onrender.com/api',
});

const setToken = accessToken => {
  if (accessToken) {
    return (instance.defaults.header.common.authorization = `${accessToken}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const getCurrentUser = async accessToken => {
  try {
    setToken(accessToken);
    const { data } = await instance.get('/user/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
