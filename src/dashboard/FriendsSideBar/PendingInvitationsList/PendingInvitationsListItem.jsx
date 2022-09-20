import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { connect } from 'react-redux';
import Avatar from '../../../components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { getActions } from '../../../store/actions/friendsAction';

function PendingInvitationsListItem({
  id,
  name,
  email,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisabled(false);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar name={name} />
          <Typography
            sx={{
              marginLeft: '7px',
              fontWeight: 700,
              color: '#8e9297',
              flexGrow: 1,
            }}
            variant="subtitle2"
          >
            {name}

          </Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
}

const mapActionToProps = (dispatch) => ({
  ...getActions(dispatch),
});
PendingInvitationsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  acceptFriendInvitation: PropTypes.func.isRequired,
  rejectFriendInvitation: PropTypes.func.isRequired,
};

export default connect(null, mapActionToProps)(PendingInvitationsListItem);
