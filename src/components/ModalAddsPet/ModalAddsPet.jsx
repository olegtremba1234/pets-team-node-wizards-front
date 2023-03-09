import { useState, useEffect, useRef } from 'react';
import { postNewPet } from 'services/apiService';
// import * as Yup from 'yup';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import {
  AvatarWrapper,
  BtnMain,
  BtnWrapper,
  ButtonIcon,
  CloseBtn,
  Input,
  InputAvatar,
  InputAvatarWrapper,
  Label,
  LabelAvatar,
  Modal,
  ModalContent,
  ModalTitle,
  Overlay,
  Textarea,
} from './ModalAddsPet.styled';
import {Icons}from "../User/Icons/Icons"
import { GrClose } from 'react-icons/gr';
import { ButtonBack } from 'components/User/PetsData/PetsData.styled';


export default function ModalAddsPet({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOnStepOne, setIsModalOnStepOne] = useState(true);
  const [name, setName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [breed, setBreed] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarFileName, setAvatarFileName] = useState('');
  const [comments, setComments] = useState('');
  const filePicker = useRef(null);

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

  // const addPetSchema = Yup.object({
  //   name: Yup.string('Type name pet')
  //     .min(2, 'Too Short!')
  //     .max(16, 'Too Long!')
  //     .required('Required'),
  //   birthDay: Yup.string('Date of birth')
  //     .min(10, 'Too Short!')
  //     .max(12, 'Too Long!')
  //     .required('Required'),
  //   breed: Yup.string('Type breed')
  //     .min(2, 'Too Short!')
  //     .max(16, 'Too Long!')
  //     .required('Required'),
  //   comments: Yup.string('Add comment')
  //     .min(8, 'Please enter a comment more than 7 character')
  //     .max(120, 'Please enter a comment less than 120 character')
  //     .required('Required'),
  // });

  const handleClose = event => {
    if (event.currentTarget === event.target) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalStepHandler = () => {
    setIsModalOnStepOne(!isModalOnStepOne);
  };

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'birthDay') {
      setBirthDay(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'breed') {
      setBreed(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'avatar') {
      const pathString = e.currentTarget.value;
      const fileName = pathString.split('\\').slice(-1).toString();
      console.log('fileName >>>', fileName);
      setAvatarFileName(fileName);
      setAvatar(pathString);
    }
    if (e.currentTarget.name === 'comments') {
      setComments(e.currentTarget.value);
    }
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const delAvatarChoice = () => {
    setAvatar(null);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newPet = { name, birthDay, breed, comments };
    postNewPet(newPet);
    reset();
    return newPet;
  };

  const reset = () => {
    setName('');
    setBirthDay('');
    setBreed('');
    setAvatar(null);
    setComments('');
    setIsModalOpen(false);
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
          {isModalOnStepOne ? (
            <ModalContent>
              <ModalTitle>Add pet</ModalTitle>
              <form id="form-adds-pet-step-1">
                <Label>
                  Name pet
                  <Input
                    type="text"
                    name="name"
                    placeholder="Type name pet"
                    value={name}
                    onChange={handleChange}
                  />
                </Label>
                <Label>
                  Date of birth
                  <Input
                    type="text"
                    name="birthDay"
                    placeholder="Type date of birth"
                    value={birthDay}
                    onChange={handleChange}
                  />
                </Label>
                <Label>
                  Breed
                  <Input
                    type="text"
                    name="breed"
                    placeholder="Type breed"
                    value={breed}
                    onChange={handleChange}
                  />
                </Label>

                <BtnWrapper>
                  <BtnMain
                    type="button"
                    content="Cancel"
                    onClick={handleClose}
                  />
                  <BtnMain
                    type="button"
                    content="Next"
                    onClick={modalStepHandler}
                  />
                </BtnWrapper>
              </form>
              <CloseBtn className="modal-open-btn" onClick={toggleModal}>
                <GrClose size={20} />
              </CloseBtn>
            </ModalContent>
          ) : (
            <ModalContent className="step-2">
              <ModalTitle className="step-2">Add pet</ModalTitle>
              <form id="form-adds-pet-step-2" onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                  />
                </AvatarWrapper>
                <Label>
                  Comments
                  <Textarea
                    type="text"
                    name="comments"
                    placeholder="Type comments"
                    value={comments}
                    onChange={handleChange}
                  />
                </Label>
                <BtnWrapper>
                  <BtnMain
                    type="button"
                    content="Back"
                    onClick={modalStepHandler}
                  />
                  <BtnMain type="submit" content="Done" />
                </BtnWrapper>
              </form>
              <CloseBtn className="modal-open-btn" onClick={toggleModal}>
                <GrClose size={20} />
              </CloseBtn>
            </ModalContent>
          )}
        </Modal>
      )}
    </>
  );
}
