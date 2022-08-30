import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system/styled';
import MainPageButton from './MainPageButton';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
});
function SiderBar(props) {
  return (
    <MainContainer>
      <MainPageButton />
    </MainContainer>

  );
}

SiderBar.propTypes = {

};

export default SiderBar;
