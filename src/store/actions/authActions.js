import * as api from '../../api/api';
import { openAlertMessage } from './alertActions';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

const setUserDetails = (userDetails) => ({
  type: authActions.SET_USER_DETAILS,
  userDetails,
});

const login = (userDetail, navigate) => async (dispatch) => {
  try {
    const response = await api.login(userDetail);
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { userInformation } = response?.data;

    localStorage.setItem('user', JSON.stringify(userInformation));
    dispatch(setUserDetails(userInformation));
    navigate('/dashboard');
  } catch (error) {
    dispatch(openAlertMessage(error.message));
  }
};

const register = (userDetail, navigate) => async (dispatch) => {
  try {
    const response = await api.register(userDetail);

    // eslint-disable-next-line no-unsafe-optional-chaining
    const { userInformation } = response?.data;

    localStorage.setItem('user', JSON.stringify(userInformation));
    dispatch(setUserDetails(userInformation));
    navigate('/login');
  } catch (error) {
    dispatch(openAlertMessage(error.response.data.message));
  }
};

export const getActions = (dispatch) => ({
  login: (userDetails, history) => dispatch(login(userDetails, history)),
  register: (userDetails, history) => dispatch(register(userDetails, history)),
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails))
  ,
});
