import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import { connect } from 'react-redux';
import Avatar from '../../../components/Avatar';
import OnlineIndicator from './OnlineIndicator';
import { chatTypes, getActions } from '../../../store/actions/chatActions';

function FriendsListItem({
  name, isOnline, id, setChosenChatDetails,
}) {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails({ id, name }, chatTypes.DIRECT);
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
    >
      <Avatar name={name} />
      <Typography
        style={{
          marginLeft: '7px',
          fontWeight: 700,
          color: '#8e9297',
        }}
        variant="subtitle1"
        align="left"
      >
        {name}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
}

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  setChosenChatDetails: PropTypes.func.isRequired,
};

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapActionsToProps)(FriendsListItem);
