import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, Typography, DialogTitle,
} from '@mui/material';
import { validateMail } from '../../utils/validator';
import InputWithLabel from '../../components/inputWithLabel';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';

function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {

  },
}) {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    sendFriendInvitation('merhaba');
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  };

  useEffect(() => {
    setIsFormValid(validateMail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter e-mail address of friend which you would like to invite</Typography>
          </DialogContentText>
          <InputWithLabel label="Mail" type="text" value={email} setValue={setEmail} placeholder="Enter email address" />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}
          />
        </DialogActions>
      </Dialog>

    </div>
  );
}

AddFriendDialog.propTypes = {
  isDialogOpen: PropTypes.bool.isRequired,
  closeDialogHandler: PropTypes.func.isRequired,
  sendFriendInvitation: PropTypes.func.isRequired,

};

export default AddFriendDialog;
