import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const AvatarPreview = styled('div')({
  height: '42px',
  width: '42px',
  backgroundColor: '#5865f2',
  borderRadius: '42px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: '700',
  marginLeft: '5px',
});
function Avatar({ name, large }) {
  return (
    <AvatarPreview style={large && { height: '80px', width: '80px' }}>{name.substring(0, 2)}</AvatarPreview>
  );
}
Avatar.defaultProps = {
  large: undefined,
};
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

export default Avatar;
