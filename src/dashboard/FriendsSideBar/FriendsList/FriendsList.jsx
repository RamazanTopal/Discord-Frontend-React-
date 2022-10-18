import React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import FriendsListItem from './FriendsListItem';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    // eslint-disable-next-line no-param-reassign
    f.isOnline = isUserOnline || false;
  });
  return friends;
};
function FriendsList({ friends, onlineUsers }) {
  return (
    <MainContainer>
      {

        // eslint-disable-next-line array-callback-return
        checkOnlineUsers(friends, onlineUsers).map((f) => (
          <FriendsListItem
            name={f.name}
            id={f.id}
            key={f.id}
            isOnline={f.isOnline}
          />
        ))
      }
    </MainContainer>
  );
}

FriendsList.propTypes = {
  // eslint-disable-next-line react/require-default-props,

  friends: PropTypes.arrayOf(PropTypes.shape()),
  onlineUsers: PropTypes.arrayOf(PropTypes.shape()),
};
const mapStoreStateToProps = ({ friends }) => ({
  ...friends,
});
export default connect(mapStoreStateToProps)(FriendsList);
