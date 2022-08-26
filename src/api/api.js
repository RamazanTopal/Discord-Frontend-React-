import axios from 'axios';
import logout from '../utils/auth';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  timeout: 5000,
});

apiClient.interceptors.request.use((config) => {
  const userInformation = localStorage.getItem('user');
  if (userInformation) {
    const { token } = JSON.parse(userInformation);
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (err) => Promise.reject(err));

// eslint-disable-next-line no-return-await
export const login = async (data) => await apiClient.post('/user/login', data);

// eslint-disable-next-line no-return-await
export const register = async (data) => await apiClient.post('/user/register', data);

export const checkReponseCode = (error) => {
  const responseCode = error?.response?.status;
  if (responseCode) {
    return (responseCode === 401 || responseCode === 403) && logout();
  }
  return false;
};
