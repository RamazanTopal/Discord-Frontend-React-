import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Messenger from './Messenger';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import SideBar from './SideBar/SideBar';
import logout from '../utils/auth';
import { getActions } from '../store/actions/authActions';
import AppBar from './AppBar/AppBar';
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});
function Dashboard({ setUserDetails }) {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <Messenger />
      <FriendsSideBar />
      <AppBar />
    </Wrapper>
  );
}

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});
Dashboard.propTypes = {
  setUserDetails: PropTypes.func.isRequired,
};

export default connect(null, mapActionsToProps)(Dashboard);
