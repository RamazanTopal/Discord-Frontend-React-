import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthBox from '../../components/authWrapper';
import { validateRegister } from '../../utils/validator';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';
import { getActions } from '../../store/actions/authActions';

function RegisterPage({ register }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      email,
      password,
      name,
      surname,
      gender,
    };
    register(userDetails, navigate);
  };

  useEffect(() => {
    setIsFormValid(validateRegister({
      email, name, password, gender, surname,
    }));
  }, [email, name, password, setIsFormValid, gender, surname]);
  return (
    <AuthBox type="register">
      <Typography
        variant="h5"
        sx={{
          color: 'white',
        }}
      />
      <RegisterPageInputs
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        gender={gender}
        setGender={setGender}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
}

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, mapActionsToProps)(RegisterPage);
