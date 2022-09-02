import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import { Check, Clear } from '@mui/icons-material';

function InvitationDecisionButtons({ disabled, acceptInvitationHandler, rejectInvitationHandler }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <Check />
      </IconButton>
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <Clear />
      </IconButton>
    </Box>
  );
}

InvitationDecisionButtons.propTypes = {
  disabled: PropTypes.bool.isRequired,
  acceptInvitationHandler: PropTypes.func.isRequired,
  rejectInvitationHandler: PropTypes.func.isRequired,
};

export default InvitationDecisionButtons;
