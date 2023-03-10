import { useState, useEffect, useRef } from 'react';
import { postNewPet } from 'services/apiService';
import { Formik, Form } from 'formik';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import {
  AvatarWrapper,
  BtnMain,
  // BtnWrapper,
  ButtonIcon,
  CloseBtn,
  InputAvatar,
  InputAvatarWrapper,
  // Label,
  LabelAvatar,
  Modal,
  ModalContent,
  ModalTitle,
  Overlay,
  // Textarea,
} from './ModalAddsPet.styled';
import {Icons}from "../User/Icons/Icons"
import { GrClose } from 'react-icons/gr';
import { ButtonBack } from 'components/User/PetsData/PetsData.styled';

import MyTextInput from 'components/MyTextInput';
import MyTextArea from 'components/MyTextArea';
import addPetSchemaFirstStep from 'services/formik/addPetSchemaFirstStep';
import addPetSchemaSecondStep from 'services/formik/addPetSchemaSecondStep';

export default function ModalAddsPet({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [avatarFileName, setAvatarFileName] = useState('');
  const filePicker = useRef(null);
  const [data, setData] = useState({
    name: '',
    birthDay: '',
    breed: '',
    comments: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const escapeModal = event => {
      if (event.code === 'Escape') {
        event.preventDefault();
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  });

  const makeRequest = formData => {
    console.log('Formik submit >>>', formData);
    postNewPet(formData);
  };

  const resetData = () => {
    setData({
      name: '',
      birthDay: '',
      breed: '',
      comments: '',
    });
    setIsModalOpen(false);
    setCurrentStep(0);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      resetData();
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const StepOne = props => {
    const handleSubmit = values => {
      props.next(values);
    };

    return (
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={addPetSchemaFirstStep}
      >
        {() => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Type name pet"
            />
            <MyTextInput
              label="Date of birth"
              name="birthDay"
              type="text"
              placeholder="Type date of birth"
            />
            <MyTextInput
              label="Breed"
              name="breed"
              type="text"
              placeholder="Type breed"
            />

            <BtnMain type="submit">Next Next Next</BtnMain>
          </Form>
        )}
      </Formik>
    );
  };

  const StepTwo = props => {
    const handleSubmit = values => {
      props.next(values, true);
    };

    return (
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={addPetSchemaSecondStep}
      >
        {({ values }) => (
          <Form>
            <AvatarWrapper>
              <LabelAvatar htmlFor="addAvatar">
                Add photo and some comments
              </LabelAvatar>
              <InputAvatarWrapper type="button" onClick={handlePick}>
                {avatar ? (
                  <div onClick={delAvatarChoice}>{avatarFileName}</div>
                ) : (
                  <Plus />
                )}
              </InputAvatarWrapper>
              <InputAvatar
                type="file"
                name="avatar"
                id="avatar"
                ref={filePicker}
                accept="image/*,.png,.jpg"
                // onChange={handleAvatarChange}
              />
            </AvatarWrapper>
            <MyTextArea
              label="Comments"
              name="comments"
              type="text"
              placeholder="Type comments"
            />

            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  const handleClose = event => {
    if (event.currentTarget === event.target) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const handleAvatarChange = e => {
  //   const pathString = e.currentTarget.value;
  //   const fileName = pathString.split('\\').slice(-1).toString();

  //   setAvatarFileName(fileName);
  //   setAvatar(pathString);
  // };

  const handlePick = e => {
    filePicker.current.click();
  };

  const delAvatarChoice = () => {
    setAvatar(null);
  };

  return (
    <>
      <ButtonIcon className="modal-open-btn" onClick={toggleModal}>
        Add pet
        <ButtonBack>
          <Icons id="icon-user_plus" />
        </ButtonBack>
      </ButtonIcon>
      {children}
      {isModalOpen && (
        <Modal>
          <Overlay onClick={handleClose} />
          <ModalContent>
            <ModalTitle>Add pet</ModalTitle>
            {steps[currentStep]}
            <CloseBtn className="modal-open-btn" onClick={toggleModal}>
              <GrClose size={20} />
            </CloseBtn>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
