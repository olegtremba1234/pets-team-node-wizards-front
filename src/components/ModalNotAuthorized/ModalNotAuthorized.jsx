
import { ModalBox, ModalText, ModalWrap, Overlay, ModalWindow, Btn, ButtonWrap, Title, CloseButton } from "./ModalNotAuthorized.styled";
import { useNavigate } from 'react-router-dom';


const ModalNotAuthorized = ({ onClose, onClickBackdrop }) => {
  const navigate = useNavigate();
  return (
    <ModalBox>
      <Overlay onClick={onClickBackdrop}>
        <ModalWindow>
      <ModalWrap>
      <Title>Ви не авторизовані!</Title>

      <ModalText> Будь ласка, увійдіть або зареєструйтесь!</ModalText>
      <ButtonWrap>
      <Btn onClick={() => {
                  navigate('/login');
                  onClose()
                }}>Login</Btn>
      <Btn onClick={() => {
                  navigate('/register');
                  onClose()
                }}>Register</Btn>
      </ButtonWrap>
      <CloseButton onClick={onClose}></CloseButton>
      </ModalWrap>
      </ModalWindow>
      </Overlay>
    </ModalBox>
  );
};

export default ModalNotAuthorized;
