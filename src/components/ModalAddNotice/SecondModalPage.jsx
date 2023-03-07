import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import maleImg from '../ModalAddNotice/images/male.png'
import femaleImg from '../ModalAddNotice/images/female.svg';
import maleImg from '../ModalAddNotice/images/male.svg';
import addImg from '../ModalAddNotice/images/add.svg';

import {
  GenderLabel,
  Input,
  InputRadio,
  Label,
  Form,
  AvatarLabel,
  FieldRequired,
  Button,
  ButtonWrap,
  FieldWrap,
  GenderMale,
  AddImage,
  SelectedImage,
  FileInput,
  InputTextArea,
  Title,
  GenderFemale,
  Span
} from './ModalAddNotice.styled';

const SecondModalPage = ({
  handleBackToFirst,
  secondStepValues,
  handleAddAvatar,
  file,
  handleSecondStepSubmit,
  category,
}) => {
  const secondStepSchema = Yup.object({
    sex: Yup.string().required('Required'),
    location: Yup.string()
      .min(2, 'Location is too short')
      .max(48, 'Location is too long')
      .required('Required'),
    price: Yup.number().when(category, {
      is: () => category === 'sell',
      then: Yup.number().min(1).required('Required'),
      otherwise: Yup.number().notRequired(),
    }),
    avatar: Yup.mixed().required('Required'),
    comments: Yup.string()
      .min(8, 'Comments is too short')
      .max(120, 'Comments is too long')
      .required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={secondStepValues}
        onSubmit={handleSecondStepSubmit}
        validationSchema={secondStepSchema}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <Title>
              The sex
              <FieldRequired>*</FieldRequired>
            </Title>
            <FieldWrap>
              <GenderLabel htmlFor="male">
                <InputRadio
                  type="radio"
                  id="male"
                  name="sex"
                  alt="male"
                  value="male"
                />
                <GenderMale src={maleImg}/>
                <Span>Male</Span>
              </GenderLabel>

              <GenderLabel htmlFor="female">
                <InputRadio
                  type="radio"
                  id="female"
                  name="sex"
                  alt="female"
                  value="female"
                />
                <GenderFemale src={femaleImg}/>
                <Span>Female</Span>
              </GenderLabel>
              <ErrorMessage name="sex" />
            </FieldWrap>

            <Label htmlFor="location">
              Location<FieldRequired>*</FieldRequired>
              <Input
                type="text"
                id="location"
                placeholder="Type location"
                name="location"
              />
              <ErrorMessage name="location" />
            </Label>
            {category === 'sell' && (
              <Label htmlFor="price">
                Price<FieldRequired>*</FieldRequired>
                <Input
                  type="number"
                  id="price"
                  placeholder="Type price"
                  name="price"
                />
                <ErrorMessage name="price" />
              </Label>
            )}

            <Label>
              Load the pet's image<FieldRequired>*</FieldRequired>
            </Label>

            <AvatarLabel htmlFor="avatar">
              <AddImage>
                {file ? (
                  <SelectedImage
                    id="petAvatar"
                    src={file}
                    alt={secondStepValues.avatar.name}
                  />
                ) : (
                  <img src={addImg} alt="add" />
                )}
              </AddImage>
              <FileInput
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg, image/jpg, image/gif"
                onChange={e => handleAddAvatar(e, setFieldValue)}
              />
              {touched.avatar && errors.avatar && <div></div>}
            </AvatarLabel>

            <Label htmlFor="comments">
              Comments<FieldRequired>*</FieldRequired>
              <InputTextArea
                component="textarea"
                name="comments"
                id="comments"
                rows="3"
                placeholder="Type comments"
              ></InputTextArea>
              <ErrorMessage name="comments" />
            </Label>

            <ButtonWrap>
              <Button onClick={() => handleBackToFirst(values)} type="button">
                Back
              </Button>
              <Button
                type="submit"
                // disabled={loading ? true : false}
              >
                Done
              </Button>
            </ButtonWrap>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SecondModalPage;
