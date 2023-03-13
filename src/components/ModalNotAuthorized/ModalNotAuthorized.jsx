
import { ModalBox, ModalText, ModalWrap, Overlay, ModalWindow, Btn, ButtonWrap } from "./ModalNotAuthorized.styled";
import { useNavigate } from 'react-router-dom';

const ModalNotAuthorized = () => {
  const navigate = useNavigate();
  return (
    <ModalBox>
      <Overlay>
        <ModalWindow>
      <ModalWrap>
      <h3>Ви не авторизовані!</h3>

      <ModalText> Будь ласка, увійдіть або зареєструйтесь!</ModalText>
      <ButtonWrap>
      <Btn onClick={() => {
                  navigate('/login');
                }}>Login</Btn>
      <Btn onClick={() => {
                  navigate('/register');
                }}>Register</Btn>
      </ButtonWrap>
      </ModalWrap>
      </ModalWindow>
      </Overlay>
    </ModalBox>
  );
};

export default ModalNotAuthorized;
