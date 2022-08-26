const Joi = require('joi');

const schema = Joi.object({
  password: Joi.string()
    .min(5)
    .max(30),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  name: Joi.string()
    .min(3)
    .max(30),
  surname: Joi.string()
    .min(3)
    .max(30),
  gender: Joi.string().valid('male', 'female'),
});

export const validateLogin = ({ email, password }) => {
  const errorControl = schema.validate({ email, password });

  if (!errorControl.error) {
    return true;
  }

  return false;
};

export const validateRegister = ({
  email, password, name, gender, surname,
}) => {
  const errorControl = schema.validate({
    email, password, name, gender, surname,
  });

  if (!errorControl.error) {
    return true;
  }

  return false;
};
