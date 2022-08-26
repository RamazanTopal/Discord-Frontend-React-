import React from 'react';
import { Box } from '@mui/material';
import styled from '@mui/system/styled';
import PropTypes from 'prop-types';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#5865F2',
});

function AuthWrapper({ children, type }) {
  return (
    <BoxWrapper>
      <Box sx={{
        width: 700,
        height: type === 'register' ? 550 : 350,
        bgcolor: '#36393f',
        borderRadius: '5px',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '25px',
      }}
      >
        {children}

      </Box>
    </BoxWrapper>
  );
}
AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
export default AuthWrapper;
