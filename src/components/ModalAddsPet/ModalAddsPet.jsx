import { useEffect } from 'react';
import { useState } from 'react';
import { postNewPet } from 'services/apiService';
// import Plus from '../../icons/plus.svg';
import {
  AvatarWrapper,
  BtnMain,
  BtnWrapper,
  ButtonIcon,
  CloseBtn,
  Input,
  InputAvatar,
  Label,
  LabelAvatar,
  Modal,
  ModalContent,
  ModalTitle,
  Overlay,
  Textarea,
} from './ModalAddsPet.styled';

export default function ModalAddsPet({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOnStepOne, setIsModalOnStepOne] = useState(true);
  const [name, setName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [breed, setBreed] = useState('');
  // const [avatar, setAvatar] = useState('');
  const [comments, setComments] = useState('');
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
    // if (e.currentTarget.name === 'avatar') {
    //   setAvatar(e.currentTarget.value);
    // }
    if (e.currentTarget.name === 'comments') {
      setComments(e.currentTarget.value);
    }
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
    // setAvatar('');
    setComments('');
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonIcon className="modal-open-btn" onClick={toggleModal}>
        Add pet
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
                X
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
                  <InputAvatar
                    type="file"
                    name="avatar"
                    id="avatar"
                    // onChange={handleChange}
                  />
                  {/* <img src={Plus} alt="frame" /> */}
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
                X
              </CloseBtn>
            </ModalContent>
          )}
        </Modal>
      )}
    </>
  );
}
