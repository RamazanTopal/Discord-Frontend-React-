import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Wrapper = styled('div')({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

function WelcomeMessage() {
  return (
    <Wrapper>
      <Typography
        variant="h6"
        sx={{ color: 'white' }}
      >
        To start chatting - choose conversation
      </Typography>
    </Wrapper>
  );
}

export default WelcomeMessage;
