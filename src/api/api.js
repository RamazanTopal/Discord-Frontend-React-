/* eslint-disable camelcase */
/* eslint-disable no-return-await */
import axios from 'axios';
import logout from '../utils/auth';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  timeout: 5000,
});

apiClient.interceptors.request.use((config) => {
  const userInformation = JSON.parse(localStorage.getItem('user')) || null;

  if (userInformation?.tokens?.access_token) {
    const { tokens: { access_token } } = userInformation;
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  return config;
}, async (err) => {
  Promise.reject(err);
});

export const login = async (data) => {
  try {
    return await apiClient.post('/user/login', data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/user/register', data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/invite', data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const checkReponseCode = (error) => {
  const responseCode = error?.response?.status;
  if (responseCode) {
    return (responseCode === 401 || responseCode === 403) && logout();
  }
  return false;
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/accept', data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/reject', data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
