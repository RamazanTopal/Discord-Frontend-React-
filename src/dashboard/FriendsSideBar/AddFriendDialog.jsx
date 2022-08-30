import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@mui/material';
import { validateMail } from '../../utils/validator';

function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {

  },
}) {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {

  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  };

  useEffect(() => {
    setIsFormValid(validateMail(email));
  }, [email, setIsFormValid]);

  return (
    <div><Dialog open={isDialogOpen} onClose={handleCloseDialog} /></div>
  );
}

AddFriendDialog.propTypes = {

};

export default AddFriendDialog;
