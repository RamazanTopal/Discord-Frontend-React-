import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthBox from '../../components/authWrapper';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLogin } from '../../utils/validator';
import { getActions } from '../../store/actions/authActions';

function LoginPage({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLogin({ email, password }));
  }, [email, password, setIsFormValid]);
  const handleLogin = () => {
    const userDetails = {
      email,
      password,
    };
    login(userDetails, navigate);
  };
  return (
    <AuthBox type="login">
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
}
const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapActionsToProps)(LoginPage);
