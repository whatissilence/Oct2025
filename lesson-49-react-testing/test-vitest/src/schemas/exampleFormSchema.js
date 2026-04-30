import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const schema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username should be at least 5 symbols')
    .required('Username is required'),

  email: yup
    .string()
    .email('Email is wrong')
    .required('Email is required'),

  age: yup
    .number()
    .min(18, 'You should be 18 years old')
    .max(128, 'Are you sure it\'s your age?')
    .required('Age is required'),

  password: yup
    .string()
    .min(8, 'Password should be at least 8 symbols')
    .matches(passwordRules, 'Password should be at least 8 sym, 1 upper, 1 lower, 1 num')
    .required('Password is required'),

  repeatPass: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Repeat passwords must match')
    .required('Repeat password is required'),
})