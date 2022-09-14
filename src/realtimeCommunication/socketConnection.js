import io from 'socket.io-client';
import { setPendingFriendsInvitations } from '../store/actions/friendsAction';
import store from '../store/store';

let socket = null;

// eslint-disable-next-line import/prefer-default-export
export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.tokens.access_token;

  socket = io('http://localhost:8000', {
    auth: {
      token: jwtToken,
    },
  });

  socket.on('connect', () => {
    console.log('succesfully connected with socket.io server');
    console.log('socketId', socket.id);
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
};
