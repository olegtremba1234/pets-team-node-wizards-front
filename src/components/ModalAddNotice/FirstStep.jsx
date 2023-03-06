import {  Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input, InputRadio, Label, Form,  ModalText, CategoryLostFound, CategoryForFree, CategorySell, LabelTitle, FieldRequired, ButtonWrap, Button, ErrorMsg, FieldRadioWrap } from './ModalAddNotice.styled';

const FirstStep = ({
  handleFirstStepSubmit,
  firstStepValues,
  handleModalClose,
  handleDateValidation,
  verifyCategory,
}) => {
  const [categoryValue, setCategoryValue] = useState(firstStepValues.category);

  const firstStepSchema = Yup.object({
    category: Yup.string().required('Required'),
    title: Yup.string()
      .min(2, 'Title is too short')
      .max(48, 'Title is too long')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Name is too short')
      .max(16, 'Name is too long')
      .required('Required'),
    birthDate: Yup.string().when(categoryValue, {
      is: () => verifyCategory(categoryValue),
      then: Yup.string()
        .matches(
          /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:20)\d{2})\s*$/,
          'Date format should be DD.MM.YYYY'
        )

        .required('Required'),
      otherwise: Yup.string(),
    }),

    breed: Yup.string()
      .min(1, 'Breed is too short')
      .max(24, 'Breed is too long')
      .required('Required'),
  });

  const handleCategoryClick = e => {
    setCategoryValue(e.currentTarget.value);
  };

  return (
    <>
      <Formik
        initialValues={firstStepValues}
        onSubmit={handleFirstStepSubmit}
        validationSchema={firstStepSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <ModalText>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </ModalText>
            <FieldRadioWrap>
              <Label htmlFor="lost-found">
                <InputRadio
                  type="radio"
                  name="category"
                  id="lost-found"
                  value="lost-found"
                  onClick={handleCategoryClick}
                />
                <CategoryLostFound></CategoryLostFound>
              </Label>

              <Label htmlFor="for-free">
                <InputRadio
                  type="radio"
                  name="category"
                  id="for-free"
                  value="for-free"
                  onClick={handleCategoryClick}
                />
                <CategoryForFree></CategoryForFree>
              </Label>

              <Label htmlFor="sell">
                <InputRadio
                  type="radio"
                  name="category"
                  id="sell"
                  value="sell"
                  onClick={handleCategoryClick}
                />
                <CategorySell></CategorySell>
              </Label>
            </FieldRadioWrap>

            <LabelTitle htmlFor="title">
              Tittle of ad <FieldRequired>*</FieldRequired>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Type title"
              />
              <ErrorMessage
                name="title"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </LabelTitle>
            <LabelTitle htmlFor="name">
              Name<FieldRequired>*</FieldRequired>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Type name"
              />
              <ErrorMessage
                name="name"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </LabelTitle>
            {categoryValue !== 'lost-found' && (
              <LabelTitle htmlFor="birthDate">
                Date of birth<FieldRequired>*</FieldRequired>
                <Input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  placeholder="Type date of birth"
                />
                <ErrorMessage
                  name="birthDate"
                  render={msg => <ErrorMsg>{msg}</ErrorMsg>}
                />
              </LabelTitle>
            )}
            <LabelTitle htmlFor="breed">
              Breed<FieldRequired>*</FieldRequired>
              <Input
                type="text"
                id="breed"
                name="breed"
                placeholder="Type breed"
              />
              <ErrorMessage
                name="breed"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </LabelTitle>
            <ButtonWrap>
              <Button
                onClick={handleModalClose}
                type="button"
              >
                Cancel
              </Button>
              <Button type="submit">
                Next
              </Button>
            </ButtonWrap>
          </Form>
        )}
      </Formik>
    </>
  );
};

FirstStep.propTypes = {
  handleFirstStepSubmit: PropTypes.func.isRequired,
  firstStepValues: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
  handleModalClose: PropTypes.func.isRequired,
  handleDateValidation: PropTypes.func.isRequired,
};

export default FirstStep;
