import React from 'react';

import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor: 'pointer',
});
function RedirectInfo({
  text, redirectText, additionalStyles, redirectHandler,
}) {
  return (
    <Typography
      sx={{ color: '#72767d' }}
      style={additionalStyles || {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>
        {redirectText}
      </RedirectText>
    </Typography>
  );
}

RedirectInfo.propTypes = {
  text: PropTypes.string.isRequired,
  redirectText: PropTypes.string.isRequired,
  additionalStyles: PropTypes.objectOf(PropTypes.string).isRequired,
  redirectHandler: PropTypes.func.isRequired,

};

export default RedirectInfo;
