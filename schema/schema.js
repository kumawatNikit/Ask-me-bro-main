// schemas/validationSchema.js

import * as Yup from 'yup';

export const validationSchema = Yup.object({
  username: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(/^[A-Z]/, 'Password must start with an uppercase letter') 
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain at least one number or symbol and one letter'), 
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});


export const validationLoginSchema = Yup.object({
  username: Yup.string().required('Name is required'),
password: Yup.string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters'),

});

export const validationUpdateSchema = Yup.object({
  username: Yup.string().required('Name is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});