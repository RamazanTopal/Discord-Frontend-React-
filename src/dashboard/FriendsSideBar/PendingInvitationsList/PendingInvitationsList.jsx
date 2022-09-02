import React from 'react';

import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Omer',
      email: 'dummy@gmail.com',
    },
  },
  {
    _id: '2',
    senderId: {
      username: 'ramazan',
      email: 'faruk@gmail.com',
    },
  },
  {
    _id: '3',
    senderId: {
      username: 'Faruh',
      email: 'omer@gmail.com',
    },
  },

];
const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});
function PendingInvitationsList() {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitation) => (
        <PendingInvitationsListItem
          // eslint-disable-next-line no-underscore-dangle
          key={invitation._id}
          // eslint-disable-next-line no-underscore-dangle
          id={invitation._id}
          username={invitation.senderId.username}
          email={invitation.senderId.email}
        />
      ))}

    </MainContainer>
  );
}

export default PendingInvitationsList;
