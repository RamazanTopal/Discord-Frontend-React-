import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';

function ChosenOptionLabel({ name }) {
  return (
    <Typography
      sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}
    >
      {`${name ? `Chosen conversation: ${name}` : ''}`}
    </Typography>
  );
}

ChosenOptionLabel.propTypes = {
  name: PropTypes.string,
};

const mapStoreStateToProps = (state) => ({
  name: state.chat.chosenChatDetails?.name,
});

export default connect(mapStoreStateToProps)(ChosenOptionLabel);
