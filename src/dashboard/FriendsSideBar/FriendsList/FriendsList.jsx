import React from 'react';

import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIENDS = [
  { id: 1, username: 'rmaazan', isOnline: true },
  { id: 2, username: 'omer', isOnline: true },
  { id: 3, username: 'salih', isOnline: false },
  { id: 4, username: 'ulu', isOnline: true }];
const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});
function FriendsList() {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
}

export default FriendsList;
