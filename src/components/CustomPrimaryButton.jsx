import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function CustomPrimaryButton({
  label, additionalStyles, disabled, onClick,
}) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: '#5865F2',
        color: 'white',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px',
      }}
      style={additionalStyles || {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

CustomPrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  additionalStyles: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CustomPrimaryButton;
