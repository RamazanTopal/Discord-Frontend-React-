import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import RedirectInfo from '../../components/RedirectInfo';

const getFormNotValidMessage = () => 'Enter correct e-mail address and password should contains between 6 and 12 characters!';
const getFormValidMessage = () => 'Press to log in!';

function LoginPageFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an acoount"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}

LoginPageFooter.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
};

export default LoginPageFooter;
