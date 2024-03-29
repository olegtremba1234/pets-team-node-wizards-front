import { useState, useEffect, useRef } from 'react';
import { postNewPet } from 'services/apiService';
import { Formik, Form } from 'formik';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import {
  AddedImage,
  AvatarWrapper,
  BtnMain,
  BtnWrapper,
  ButtonIcon,
  CloseBtn,
  InputAvatar,
  InputAvatarWrapper,
  LabelAvatar,
  Modal,
  ModalContent,
  ModalTitle,
  Overlay,
} from './ModalAddsPet.styled';
import { Icons } from '../User/Icons/Icons';
import { GrClose } from 'react-icons/gr';
import { ButtonBack } from 'components/User/PetsData/PetsData.styled';
import { toast } from 'react-toastify';

import MyTextInput from 'components/MyTextInput';
import MyTextArea from 'components/MyTextArea';
import addPetSchemaFirstStep from 'services/formik/addPetSchemaFirstStep';
import addPetSchemaSecondStep from 'services/formik/addPetSchemaSecondStep';

export default function ModalAddsPet({ children, infoModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const filePicker = useRef(null);
  const [data, setData] = useState({
    name: '',
    birthDay: `${new Date().toISOString().split('T')[0]}`,
    breed: '',
    comments: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [imagePreview, setImagePreview] = useState(null);

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

  const makeRequest = async formData => {
    await postNewPet(formData, avatar)
      .then(() => {
        toast.success('Your pet added successfully');
      })
      .catch(() => {
        toast.error('Something went wrong, please try again');
      });
    infoModal();
  };

  const resetData = () => {
    setData({
      name: '',
      birthDay: `${new Date().toISOString().split('T')[0]}`,
      breed: '',
      comments: '',
    });
    setIsModalOpen(false);
    setCurrentStep(0);
    setAvatar(null);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      const birthDay = newData.birthDay.split('-').reverse().join('.');
      const formattedData = { ...newData, birthDay };
      makeRequest(formattedData);
      resetData();

      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const onImageChange = (e, newData) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setAvatar(e.currentTarget.files[0]);
      setData(prev => ({ ...prev, ...newData }));
    }
  };

  const StepOne = props => {
    const handleSubmit = values => {
      props.next(values);
    };

    const modalContentElement = document.querySelector('#modal-content');
    modalContentElement?.classList.remove('step-2');
    const modalTitleElement = document.querySelector('#modal-title');
    modalTitleElement?.classList.remove('step-2');

    return (
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={addPetSchemaFirstStep}
      >
        {({ values }) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              id="name"
              type="text"
              placeholder="Type name pet"
            />
            <MyTextInput
              label="Date of birth"
              name="birthDay"
              id="birthDay"
              type="date"
              max={new Date().toISOString().split('T')[0]}
              value={values.birthDay}
              placeholder="Type date of birth"
            />
            <MyTextInput
              label="Breed"
              name="breed"
              id="breed"
              type="text"
              placeholder="Type breed"
            />
            <BtnWrapper>
              <BtnMain type="button" onClick={resetData}>
                Cancel
              </BtnMain>
              <BtnMain className="emphasis-btn" type="submit">
                Next
              </BtnMain>
            </BtnWrapper>
          </Form>
        )}
      </Formik>
    );
  };

  const StepTwo = props => {
    const handleSubmit = values => {
      props.next(values, true);
    };

    const modalContentElement = document.querySelector('#modal-content');
    modalContentElement?.classList.add('step-2');
    const modalTitleElement = document.querySelector('#modal-title');
    modalTitleElement?.classList.add('step-2');

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
                  <AddedImage>
                    <img alt="pet" src={imagePreview} />
                  </AddedImage>
                ) : (
                  <Plus />
                )}
                <InputAvatar
                  type="file"
                  name="avatar"
                  id="avatar"
                  ref={filePicker}
                  accept="image/*,.png,.jpg"
                  onChange={e => {
                    onImageChange(e, values);
                  }}
                />
              </InputAvatarWrapper>
            </AvatarWrapper>
            <MyTextArea
              label="Comments"
              name="comments"
              id="comments"
              type="text"
              placeholder="Type comments"
              value={values.comments}
            />
            <BtnWrapper>
              <BtnMain type="button" onClick={() => props.prev(values)}>
                Back
              </BtnMain>
              <BtnMain className="emphasis-btn" type="submit">
                Done
              </BtnMain>
            </BtnWrapper>
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

  const handlePick = () => {
    filePicker.current.click();
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
          <ModalContent id="modal-content">
            <ModalTitle id="modal-title">Add pet</ModalTitle>
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
