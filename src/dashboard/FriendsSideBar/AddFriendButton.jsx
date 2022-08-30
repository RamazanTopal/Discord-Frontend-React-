import React from 'react';
import PropTypes from 'prop-types';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d',
};

function AddFriendButton(props) {
  const handleOpenAddFriendDialog = () => {

  };
  return (
    <CustomPrimaryButton
      additionalStyles={additionalStyles}
      label="Add Friend"
      onClick={handleOpenAddFriendDialog}
    />
  );
}

AddFriendButton.propTypes = {

};

export default AddFriendButton;
