import React from 'react';

import PropTypes from 'prop-types';
import InputsWithLabel from '../../components/inputWithLabel';

function LoginPageInputs({
  email, setEmail, password, setPassword,
}) {
  return (
    <>
      <InputsWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputsWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="text"
        placeholder="Enter password number"
      />
    </>

  );
}
LoginPageInputs.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};
export default LoginPageInputs;
