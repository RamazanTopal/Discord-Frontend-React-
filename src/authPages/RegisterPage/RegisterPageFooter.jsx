import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import RedirectInfo from '../../components/RedirectInfo';

const getFormNotValidMessage = () => 'Username should contains between 3 and 20 characters and password should contains between 5 and 30 character.Also correct e-mail address should provided ';
const getFormValidMessage = () => 'Press to register!';

function RegisterPageFooter({ handleRegister, isFormValid }) {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate('/login');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account ?"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
}

RegisterPageFooter.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
};

export default RegisterPageFooter;
