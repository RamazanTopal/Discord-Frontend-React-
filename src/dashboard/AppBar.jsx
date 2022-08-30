import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system/styled';

const MainContainer = styled('div')({
  position: 'absolote',
  right: '0',
  top: '0',
  height: '48px',
  borderBottom: '1px solid black',
  backgroundColor: '#36393f',
  width: 'calc(100% - 326px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
});
function AppBar(props) {
  return (
    <MainContainer />
  );
}

AppBar.propTypes = {

};

export default AppBar;
