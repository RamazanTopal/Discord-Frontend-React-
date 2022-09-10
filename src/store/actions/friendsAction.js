import { openAlertMessage } from './alertActions';
import * as api from '../../api/api';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATION',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

const sendFriendInvitation = (data, closeDialogHandler) => async (dispatch) => {
  const response = await api.sendFriendInvitation(data);
  if (response.error) {
    dispatch(openAlertMessage(response.exception?.response?.data));
  } else {
    dispatch(openAlertMessage('Invitation has been sent!'));
    closeDialogHandler();
  }
};
export const getActions = (dispatch) => ({
  // eslint-disable-next-line max-len
  sendFriendInvitation: (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),
});
