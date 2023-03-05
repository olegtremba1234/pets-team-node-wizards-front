import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/authOperations';
import {
  FormError,
  stepOneRegisterSchema,
  stepTwoRegisterSchema,
} from '../AuthValidation/RegisterValidation';

import {
  RegisterFormContainer,
  FormInput,
  NextFormRegisterBtn,
  SectionRegisterForm,
  RegisterTitle,
  RegisterLinkText,
  RegisterBoxText,
  ReqisterLoginLink,
  BackFormRegisterBtn,
  RegisterFormBox,
  WrapInputPassword,
  ShowPasswordIcon,
  HidePasswordIcon,
  PhoneInputField,
} from './RegisterForm.styled';
import { ErrorText } from '../AuthValidation/ErrorMessageValidation.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    const bodyRegister = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      city: formData.city,
      phone: formData.phone,
    };

    dispatch(register(bodyRegister));
  };

  const handleNextStep = (newData, final = false) => {
    setUserData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setUserData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const registerSteps = [
    <RegisterStepOne
      currentStep={currentStep}
      nextStep={handleNextStep}
      userData={userData}
    />,
    <RegisterStepTwo
      currentStep={currentStep}
      nextStep={handleNextStep}
      prevStep={handlePrevStep}
      userData={userData}
    />,
  ];

  return (
    <SectionRegisterForm currentStep={currentStep}>
      {registerSteps[currentStep]}
    </SectionRegisterForm>
  );
};

const RegisterStepOne = props => {
  const [showPassword, setShowPassword] = useState(false);

  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const confirmPasswordInputId = nanoid();

  const handleSubmit = values => {
    props.nextStep(values);
  };

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <RegisterFormContainer>
      <RegisterFormBox>
        <RegisterTitle>Registration</RegisterTitle>
        <Formik
          initialValues={props.userData}
          validationSchema={stepOneRegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form autoComplete="off">
              <FormInput
                id={emailInputId}
                name="email"
                placeholder="Email"
                autoComplete="on"
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
              <WrapInputPassword>
                <FormInput
                  id={confirmPasswordInputId}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="off"
                />
                {showPassword ? (
                  <HidePasswordIcon onClick={toogleShowPassword} />
                ) : (
                  <ShowPasswordIcon onClick={toogleShowPassword} />
                )}
              </WrapInputPassword>
              <FormError name="confirmPassword" />
              <NextFormRegisterBtn
                currentStep={props.currentStep}
                type="submit"
                disabled={!isValid}
              >
                Next
              </NextFormRegisterBtn>
            </Form>
          )}
        </Formik>
        <RegisterBoxText>
          <RegisterLinkText>
            Already have an account?{' '}
            <ReqisterLoginLink to="/login">Login</ReqisterLoginLink>
          </RegisterLinkText>
        </RegisterBoxText>
      </RegisterFormBox>
    </RegisterFormContainer>
  );
};

const RegisterStepTwo = props => {
  const nameInputId = nanoid();
  const cityInputId = nanoid();
  const phoneInputId = nanoid();

  const handleSubmit = values => {
    props.nextStep(values, true);
  };

  return (
    <RegisterFormContainer>
      <RegisterFormBox>
        <RegisterTitle>Registration</RegisterTitle>
        <Formik
          initialValues={props.userData}
          validationSchema={stepTwoRegisterSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            setFieldValue,
            isValid,
            dirty,
            errors,
            touched,
            context,
          }) => (
            <Form autoComplete="off">
              <FormInput
                id={nameInputId}
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
              />
              <FormError name="name" />
              <FormInput
                id={cityInputId}
                name="city"
                placeholder="City, region"
                type="text"
                autoComplete="off"
              />
              <FormError name="city" />

              <FormInput
                component={PhoneInputField}
                type="text"
                id={phoneInputId}
                name="phone"
                onChange={e => setFieldValue('phone', `+${e}`)}
                value={values.phone}
                error={Boolean(errors.phone) && Boolean(touched.phone)}
                helperText={Boolean(touched.phone) && errors.phone}
              />
              <ErrorText>{errors.phone}</ErrorText>

              <NextFormRegisterBtn
                currentStep={props.currentStep}
                type="submit"
                disabled={!isValid}
              >
                Register
              </NextFormRegisterBtn>
              <BackFormRegisterBtn
                type="button"
                onClick={() => props.prevStep(values)}
              >
                Back
              </BackFormRegisterBtn>
            </Form>
          )}
        </Formik>
        <RegisterBoxText>
          <RegisterLinkText>
            Already have an account?{' '}
            <ReqisterLoginLink to="/login">Login</ReqisterLoginLink>
          </RegisterLinkText>
        </RegisterBoxText>
      </RegisterFormBox>
    </RegisterFormContainer>
  );
};
