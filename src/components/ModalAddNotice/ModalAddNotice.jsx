import {
  WrapperContainer,
  LabelLostFound,
  LabelFree,
  LabelSell,
  ModalWrap,
  FormWrapper,
  ModalTitle,
  ErrorText,
  Input,
  InputRadio,
  Label,
  Form,
  ModalText,
  LabelTitle,
  FieldRequired,
  ButtonWrap,
  Button,
  FieldRadioWrap,
  GenderLabel,
  AvatarLabel,
  ErrorTextLocation,
  InputDate,
  FieldWrap,
  GenderMale,
  SelectedImage,
  FileInput,
  InputTextArea,
  Title,
  GenderFemale,
  ButtonSecond,
  CloseButton,
  Legend,
  ErrorTextComment,
} from './ModalAddNotice.styled';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import femaleImg from '../ModalAddNotice/images/female.png';
import maleImg from '../ModalAddNotice/images/male.png';
import addImg from '../ModalAddNotice/images/add.svg';
import { addNotice } from 'redux/notices/noticeOperation';
import { selectIsLoading } from 'redux/notices/noticeSelector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ModalAddNotice = ({ onClose, onClickBackdrop }) => {
  const isLoading = useSelector(selectIsLoading);
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const dispatch = useDispatch();

  const moveNextRegistration = () => {
    isFirstRegisterStep
      ? setIsFirstRegisterStep(false)
      : setIsFirstRegisterStep(true);
  };


  const cityInputValidation = value => {
    if (value) {
      const comma = value.search(',');
      if (!comma || comma < 4) {
        return false;
      }
      const [, region] = value.split(',');

      if (!region?.trim()) {
        return false;
      }
      return true;
    }
  };


  const formik = useFormik({
    initialValues: {
      category: 'sell',
      title: '',
      name: '',
      birthday: `${new Date().toISOString().split('T')[0]}`,
      breed: '',
      sex: 'male',
      location: '',
      price: '0',
      comments: '',
    },
    validationSchema: Yup.object().shape({
      category: Yup.string().required('Choose category'),
      title: Yup.string()
        .required('Enter a title')
        .min(2, 'Title is too short')
        .matches(
          /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
          'The title contains only letters and spaces'
        )
        .trim()
        .max(48, 'Title is too long'),
      name: Yup.string()
        .trim()
        .min(2, 'Name is too short')
        .required('Enter the name of the animal')
        .matches(
          /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
          'The title contains only letters and spaces'
        )
        .max(16, 'Name is too long'),
      birthday: Yup.date()
        .required('Choose date of birth')
        .max(new Date(), 'The date must be in the past'),
      breed: Yup.string()
        .required('Enter a breed')
        .min(2, 'Breed is too short')
        .matches(/^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/, 'only letters')
        .trim()
        .max(24, 'Breed is too long'),
      location: Yup.string()
        .min(2, 'Location is too short')
        .max(48, 'Location is too long')
        .test(
          'locationFormat',
          'Format should be "city, region"',
          cityInputValidation
        ).required('Enter your location'),
      sex: Yup.string().required('Select gender'),
      price: Yup.string().when('category', {
        is: category => category.includes('sell'),
        then: () =>
            Yup.string()
            .matches(/^[0-9][0-9]*$/, 'Only number')
            .required('Enter a price'),
      }),
      comments: Yup.string()
        .trim()
        .required('Enter a description')
        .min(8, 'Comments is too short')
        .max(120, 'Comments is too long'),
    }),
    onSubmit: async () => {
    try {
      await dispatch(addNotice(formDataAppender(formik.values))).unwrap();
      toast.success('Ви успішно створили оголошення.');
    } catch (error) {
      toast.error('Не вдалось створити оголошення.');
    }
      formik.resetForm();
      onClose();
    },
  });


  // const formDataAppender = () => {
  //   const petPhotoUrl = document.querySelector('#petPhotoUrl');;
  //   const formData = new FormData();
  //   formData.append("petPhotoUrl", petPhotoUrl.files[0]);
  //   formData.append("category", formik.values.category);
  //   formData.append("title", formik.values.title);
  //   formData.append("name", formik.values.name);
  //   formData.append("birthday", formik.values.birthday);
  //   formData.append("breed", formik.values.breed);
  //   formData.append("location", formik.values.location);
  //   formData.append("price", formik.values.price);
  //   formData.append("sex", formik.values.sex);
  //   formData.append("comments", formik.values.comments);
  //   console.log(formData)
  // };

  const formDataAppender = fields => {
    const petImage = document.querySelector('#pet-image');
    const formData = new FormData();
    formData.append('pet-image', petImage.files[0]);
    const entriesForAppend = Object.entries(fields).reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      []
    );
    Object.entries(entriesForAppend).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(formData)
    return formData;
  };

  useEffect(() => {
    const firstStepPossibleErrors = [
      'category',
      'title',
      'name',
      'birthday',
      'breed',
    ];
    const isValidFieldsInFirstStep = !Object.keys(formik.errors).some(error =>
      firstStepPossibleErrors.includes(error)
    );
    isValidFieldsInFirstStep && formik.values.title.length > 0
      ? setDisableNextButton(false)
      : setDisableNextButton(true);
  }, [formik, disableNextButton]);

  return (
    <WrapperContainer onClick={onClickBackdrop}>
      <ModalWrap >
        <FormWrapper>
          <ModalTitle>Add pet</ModalTitle>
          <Form onSubmit={formik.handleSubmit}>
            {isFirstRegisterStep ? (
              <>
                <ModalText>
                  Please add basic information about the pet
                </ModalText>
                <FieldRadioWrap>
                  <InputRadio
                    type="radio"
                    name="category"
                    id="lost-found"
                    value="lost-found"
                    onChange={formik.handleChange}
                    checked={formik.values.category === 'lost-found'}
                  />
                  <LabelLostFound htmlFor="lost-found">
                    lost/found
                  </LabelLostFound>

                  <InputRadio
                    type="radio"
                    name="category"
                    id="in-good-hands"
                    value="in-good-hands"
                    onChange={formik.handleChange}
                    checked={formik.values.category === 'in-good-hands'}
                  />
                  <LabelFree htmlFor="in-good-hands">in good hands</LabelFree>

                  <InputRadio
                    type="radio"
                    name="category"
                    id="sell"
                    value="sell"
                    onChange={formik.handleChange}
                    checked={formik.values.category === 'sell'}
                  />
                  <LabelSell htmlFor="sell">sell</LabelSell>

                  {formik.touched.category && formik.errors.category ? (
                    <ErrorText>{formik.errors.category}</ErrorText>
                  ) : null}
                </FieldRadioWrap>

                <LabelTitle htmlFor="title">
                  Tittle of ad <FieldRequired>*</FieldRequired>
                  {formik.values.title !== '' && formik.errors.title ? (
                    <ErrorText>{formik.errors.title}</ErrorText>
                  ) : null}
                </LabelTitle>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Type title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />

                <LabelTitle htmlFor="name">
                  Name <FieldRequired>*</FieldRequired>
                  {formik.values.name !== '' && formik.errors.name ? (
                    <ErrorText>{formik.errors.name}</ErrorText>
                  ) : null}
                </LabelTitle>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <LabelTitle htmlFor="birthdayPet">
                  Date of birth<FieldRequired>*</FieldRequired>
                  {formik.values.birthday !== '' && formik.errors.birthday ? (
                    <ErrorText>{formik.errors.birthday}</ErrorText>
                  ) : null}
                </LabelTitle>
                <InputDate
                  type="date"
                  id="birthdayPet"
                  name="birthday"
                  placeholder="Type date of birth"
                  max={new Date().toISOString().split('T')[0]}
                  onChange={formik.handleChange}
                  value={formik.values.birthday}
                />

                <LabelTitle htmlFor="breed">
                  Breed<FieldRequired>*</FieldRequired>
                  {formik.values.breed && formik.errors.breed ? (
                    <ErrorText>{formik.errors.breed}</ErrorText>
                  ) : null}
                </LabelTitle>
                <Input
                  type="text"
                  id="breed"
                  name="breed"
                  placeholder="Type breed"
                  onChange={formik.handleChange}
                  value={formik.values.breed}
                />
              </>
            ) : (
              <>
                <Title>
                  The sex
                  <FieldRequired>*</FieldRequired>
                </Title>
                <FieldWrap>
                  <InputRadio
                    type="radio"
                    id="malePet"
                    name="sex"
                    value="male"
                    checked={formik.values.sex === 'male'}
                    onChange={formik.handleChange}
                  />
                  <GenderLabel htmlFor="malePet">
                    <GenderMale src={maleImg} />
                    Male
                  </GenderLabel>

                  <InputRadio
                    type="radio"
                    id="femalePet"
                    name="sex"
                    alt="female"
                    value="female"
                    checked={formik.values.sex === 'female'}
                    onChange={formik.handleChange}
                  />
                  <GenderLabel htmlFor="femalePet">
                    <GenderFemale src={femaleImg} />
                    Female
                  </GenderLabel>
                  {formik.touched.sex && formik.errors.sex ? (
                    <ErrorText>{formik.errors.sex}</ErrorText>
                  ) : null}
                </FieldWrap>

                <Label htmlFor="location">
                  Location<FieldRequired>*</FieldRequired>
                  {formik.values.location !== '' && formik.errors.location ? (
                    <ErrorTextLocation>
                      {formik.errors.location}
                    </ErrorTextLocation>
                  ) : null}
                </Label>
                <Input
                  type="text"
                  id="location"
                  placeholder="Type location"
                  name="location"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                />

                {formik.values.category === 'sell' ? (
                  <>
                    <Label htmlFor="price">
                      Price<FieldRequired>*</FieldRequired>
                      {formik.values.price !== '' && formik.errors.price ? (
                        <ErrorText>{formik.errors.price}</ErrorText>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="price"
                      placeholder="Type price"
                      name="price"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      onFocus={(e) => e.target.value = ''}
                    />
                  </>
                ) : null}

                <fieldset>
                  <Legend>
                  Load the pet's image
                  </Legend>
                    <AvatarLabel htmlFor="pet-image">
                      <SelectedImage alt="add" src={addImg} />
                      <FileInput
                        id="pet-image"
                        name="pet-image"
                        type="file"
                      />
                    </AvatarLabel>
                </fieldset>

                <Label htmlFor="comments">
                  Comments<FieldRequired>*</FieldRequired>
                  {formik.values.comments !== '' && formik.errors.comments ? (
                    <ErrorTextComment>{formik.errors.comments}</ErrorTextComment>
                  ) : null}
                </Label>
                <InputTextArea
                  id="comments"
                  name="comments"
                  type="text"
                  maxLength="120"
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.comments}
                ></InputTextArea>
              </>
            )}
            {isFirstRegisterStep && (
              <ButtonWrap>
                <Button onClick={onClose} type="button">
                  Cancel
                </Button>
                <ButtonSecond
                  type="button"
                  onClick={moveNextRegistration}
                  disabled={disableNextButton}
                >
                  Next
                </ButtonSecond>
              </ButtonWrap>
            )}

            {!isFirstRegisterStep && (
              <ButtonWrap>
                <Button onClick={moveNextRegistration} type="button">
                  Back
                </Button>
                <ButtonSecond
                  type="submit"
                  disabled={!formik.isValid || isLoading}
                >
                  Done
                </ButtonSecond>
              </ButtonWrap>
            )}
          </Form>
          <CloseButton onClick={onClose}></CloseButton>
        </FormWrapper>
      </ModalWrap>
    </WrapperContainer>
  );
};

export default ModalAddNotice;
