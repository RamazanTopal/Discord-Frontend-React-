import { openAlertMessage } from './alertActions';
import * as api from '../../api/api';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

const sendFriendInvitation = (data, closeDialogHandler) => async (dispatch) => {
  try {
    await api.sendFriendInvitation(data);
    dispatch(openAlertMessage('Invitation has been sent!'));
    closeDialogHandler();
  } catch (error) {
    dispatch(openAlertMessage(error.message));
  }
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => ({
  type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
  pendingFriendsInvitations,
});

export const setFriends = (friends) => ({
  type: friendsActions.SET_FRIENDS,
  friends,
});

export const setOnlineUsers = (onlineUsers) => ({
  type: friendsActions.SET_ONLINE_USERS,
  onlineUsers,
});

const acceptFriendInvitation = (data) => async (dispatch) => {
  try {
    await api.acceptFriendInvitation(data);
    dispatch(openAlertMessage('Invitation accepted!'));
  } catch (error) {
    dispatch(openAlertMessage(error.message));
  }
};

const rejectFriendInvitation = (data) => async (dispatch) => {
  try {
    await api.rejectFriendInvitation(data);
    dispatch(openAlertMessage('Invitation rejected!'));
  } catch (error) {
    dispatch(openAlertMessage(error.message));
  }
};
export const getActions = (dispatch) => ({
  // eslint-disable-next-line max-len
  sendFriendInvitation: (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),
  acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
  rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
});
