import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/auth/authOperations';

import { loginSchema, FormError } from '../AuthValidation/loginValidation';

import {
  LoginFormContainer,
  FormInput,
  SectionLoginForm,
  LoginTitle,
  LoginLinkText,
  LoginBoxText,
  LoginLink,
  LoginSubmitBtn,
  LoginFormBox,
  WrapInputPassword,
  ShowPasswordIcon,
  HidePasswordIcon,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const initialState = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    const body = {
      email: values.email,
      password: values.password,
    };

    dispatch(logIn(body));
  };

  return (
    <SectionLoginForm>
      <LoginFormContainer>
        <LoginFormBox>
          <LoginTitle>Login</LoginTitle>
          <Formik
            initialValues={initialState}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form autoComplete="off">
                <FormInput
                  id={emailInputId}
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                <FormError name="email" />
                <WrapInputPassword>
                  <FormInput
                    id={passwordInputId}
                    name="password"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="off"
                  />
                  {showPassword ? (
                    <HidePasswordIcon onClick={toogleShowPassword} />
                  ) : (
                    <ShowPasswordIcon onClick={toogleShowPassword} />
                  )}
                </WrapInputPassword>
                <FormError name="password" />
                <LoginSubmitBtn type="submit">Login</LoginSubmitBtn>
              </Form>
            )}
          </Formik>
          <LoginBoxText>
            <LoginLinkText>
              Don't have an account?{' '}
              <LoginLink to="/register">Register</LoginLink>
            </LoginLinkText>
          </LoginBoxText>
        </LoginFormBox>
      </LoginFormContainer>
    </SectionLoginForm>
  );
};
