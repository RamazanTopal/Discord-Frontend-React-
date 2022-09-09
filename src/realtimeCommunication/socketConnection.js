import io from 'socket.io-client';

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
    console.log(socket.id);
  });
};
