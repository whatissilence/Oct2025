import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(256, 'Username must be not longer 256 characters')
    .required('Username is required'),

  email: yup
    .string()
    .email('Email is wrong')
    .required('Email is required'),

  age: yup
    .number()
    .min(18, 'You should be at least 18')
    .max(128, 'Age is wrong'),

  password: yup
    .string()
    .min(8, 'Password must be at least 8')
    .matches(passwordRules, 'Password should be at least 8 sym, 1 upper, 1 lower, 1 num')
    .required('Password is required'),

  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Repeat passwords must match')
    .required('Repeat password is required'),
})