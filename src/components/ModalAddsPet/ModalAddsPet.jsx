import ButtonMain from 'components/ButtonMain';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  BtnWrapper,
  CloseBtn,
  Input,
  Label,
  Modal,
  ModalContent,
  ModalTitle,
  Overlay,
} from './ModalAddsPet.styled';

export default function ModalAddsPet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <>
      <button className="modal-open-btn" onClick={toggleModal}>
        Open
      </button>
      {isModalOpen && (
        <Modal>
          <Overlay onClick={handleClose} />
          <ModalContent>
            <ModalTitle>Add pet</ModalTitle>
            <form id="form-adds-pet">
              <Label>
                Name pet
                <Input type="text" name="name" placeholder="Type name pet" />
              </Label>
              <Label>
                Date of birth
                <Input
                  type="text"
                  name="birthday"
                  placeholder="Type date of birth"
                />
              </Label>
              <Label>
                Breed
                <Input type="text" name="breed" placeholder="Type breed" />
              </Label>

              <BtnWrapper>
                <ButtonMain
                  type="button"
                  content="Cancel"
                  onClick={toggleModal}
                />
                <ButtonMain type="submit" content="Next" />
              </BtnWrapper>
            </form>
            <CloseBtn className="modal-open-btn" onClick={toggleModal}>
              X
            </CloseBtn>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
