import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputWithLabel from '../../components/inputWithLabel';

function RegisterPageInputs(props) {
  const {
    email, setEmail, name, setName, password, setPassword, gender, setGender, surname, setSurname,
  } = props;
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const radioButtonStyle = {
    color: '#b9bbbe',
    fontWeight: '600',
    fontSize: '16px',
  };
  return (
    <>
      <InputWithLabel
        value={name}
        setValue={setName}
        label="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputWithLabel
        value={surname}
        setValue={setSurname}
        label="Surname"
        type="text"
        placeholder="Enter a surname"
      />
      <FormControl sx={{ marginTop: '10px' }}>
        <FormLabel id="demo-controlled-radio-buttons-group" sx={radioButtonStyle}>Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={gender}
          onChange={handleChange}
        >
          <FormControlLabel
            sx={radioButtonStyle}
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel sx={radioButtonStyle} value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="text"
        placeholder="Enter password "
      />

    </>
  );
}

RegisterPageInputs.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  surname: PropTypes.string.isRequired,
  setSurname: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired,
};

export default RegisterPageInputs;
