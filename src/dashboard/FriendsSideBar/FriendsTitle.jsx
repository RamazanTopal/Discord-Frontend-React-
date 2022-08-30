import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function FriendsTitle({ title }) {
  return (
    <Typography
      sx={{
        textTransform: 'uppercase',
        color: '#8e9297',
        fontSize: '14px',
        marginTop: '10px',
      }}
    >
      {title}

    </Typography>
  );
}

FriendsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FriendsTitle;
