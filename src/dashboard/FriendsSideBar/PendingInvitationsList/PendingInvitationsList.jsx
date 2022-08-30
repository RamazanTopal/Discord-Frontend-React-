import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system/styled';

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});
function PendingInvitationsList(props) {
  return (
    <MainContainer />
  );
}

PendingInvitationsList.propTypes = {

};

export default PendingInvitationsList;
