import { useMediaQuery } from 'react-responsive';
import { Button, Span } from './AddNoticeButton.styled';
import { useState, useEffect } from 'react';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';

export default function AddNoticeButton() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] = useState(false);
  useEffect(() => {
    if (isModalAddTransactionOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isModalAddTransactionOpen]);

  const handleOpenModal = () => {
    setIsModalAddTransactionOpen(true);
    
  };

  const handleClickClose = () => {
    setIsModalAddTransactionOpen(false);
    console.log("click")

  };

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };
  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        handleClickClose();
      }
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, []);
  return (
    <>
      {isModalAddTransactionOpen && (
        <ModalAddNotice
          onClose={handleClickClose}
          onClickBackdrop={handleBackdrop}
        />
      )}
      {isMobile ? (
        <Button  onClick={handleOpenModal}>
          <Span>+</Span>
          Add pet
        </Button>
      ) : (
        <Button  onClick={handleOpenModal}>
          Add pet<Span>+</Span>
        </Button>
      )}
    </>
  );
}
