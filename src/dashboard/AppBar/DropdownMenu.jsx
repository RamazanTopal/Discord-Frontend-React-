import React, { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVertOutlined } from '@mui/icons-material';
import logout from '../../utils/auth';

function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: 'white' }}>
        <MoreVertOutlined />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>

  );
}

export default DropdownMenu;
