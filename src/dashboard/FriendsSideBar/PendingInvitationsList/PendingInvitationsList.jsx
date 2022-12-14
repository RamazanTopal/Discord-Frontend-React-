import React from 'react';

import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});
function PendingInvitationsList({ pendingFriendsInvitations }) {
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => (
        <PendingInvitationsListItem
          // eslint-disable-next-line no-underscore-dangle
          key={invitation._id}
          // eslint-disable-next-line no-underscore-dangle
          id={invitation._id}
          name={invitation.senderId.name}
          email={invitation.senderId.email}
        />
      ))}

    </MainContainer>
  );
}

const mapStoreStateToProps = ({ friends }) => ({
  ...friends,
});

PendingInvitationsList.defaultProps = {
  pendingFriendsInvitations: undefined,
};
PendingInvitationsList.propTypes = {
  // eslint-disable-next-line react/require-default-props,

  pendingFriendsInvitations: PropTypes.arrayOf(PropTypes.shape()),
};
export default connect(mapStoreStateToProps)(PendingInvitationsList);
