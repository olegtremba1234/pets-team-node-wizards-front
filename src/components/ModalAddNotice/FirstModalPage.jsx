import {  Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {ErrorInput, ErrorText, Input, InputRadio, Label, Form,  ModalText, CategoryLostFound, CategoryForFree, CategorySell, LabelTitle, FieldRequired, ButtonWrap, Button, ErrorMsg, FieldRadioWrap } from './ModalAddNotice.styled';

const FirstModalPage = ({
  handleFirstInputSubmit,
  firstModalValues,
  handleModalClose,
  handleDateValidation,
  verifyCategory,
}) => {
  const [categoryValue, setCategoryValue] = useState(firstModalValues.category);


  const firstModalSchema = Yup.object({
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
        .test(
          'dateFormat',
          'Provide a valid date of birth',
          handleDateValidation
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
        initialValues={firstModalValues}
        onSubmit={handleFirstInputSubmit}
        validationSchema={firstModalSchema}
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
              {errors.title && touched.title ? <ErrorInput color="red">{errors.title}</ErrorInput> : ''}
              <Input
               border={errors.title && "1px solid red"}
                type="text"
                id="title"
                name="title"
                placeholder="Type title"
              />
             <ErrorMessage
      name="title"
      render={message => <ErrorText>{message}</ErrorText>}
    />
            </LabelTitle>
            <LabelTitle htmlFor ="name">
              Name<FieldRequired>*</FieldRequired>
              {errors.name && touched.name ? <ErrorInput color="red"></ErrorInput> : ''}
              <Input
              border={errors.name && "1px solid red"}
                type="text"
                id="name"
                name="name"
                placeholder="Type name"
              />
               <ErrorMessage
                name="name"
                render={msg => <ErrorMessage>{msg}</ErrorMessage>}
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


export default FirstModalPage;