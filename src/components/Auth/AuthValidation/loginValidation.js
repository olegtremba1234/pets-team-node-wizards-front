import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorText } from './ErrorMessageValidation.styled';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

export const passwordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is a required field'),
});

export const FormError = ({ name, message }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
