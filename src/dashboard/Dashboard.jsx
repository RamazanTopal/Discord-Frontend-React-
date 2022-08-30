import React from 'react';
import { styled } from '@mui/system/styled';
import SiderBar from './SiderBar/SiderBar';
import AppBar from './AppBar';
import Messenger from './Messenger';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import SiderBar from './SideBar/SiderBar';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});
function Dashboard() {
  return (
    <Wrapper>
      <SiderBar />
      <Messenger />
      <FriendsSideBar />
      <AppBar />
    </Wrapper>
  );
}

export default Dashboard;
