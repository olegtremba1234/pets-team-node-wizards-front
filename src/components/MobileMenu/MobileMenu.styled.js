import styled, { keyframes } from 'styled-components';
import { GrClose } from 'react-icons/gr';
const fadeInOut = keyframes`
  from {
   opacity:0;

  }
  to {
    opacity: 1;
  }
`;

export const DivMobile = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.backgrounds.bodyPrimary};

  animation: ${fadeInOut} 500ms ease-in-out;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px transparent solid;
`;

export const CloseIcon = styled(GrClose)`
  width: 40px;
  height: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalContainer = styled.div`
  padding: 16px 20px;

  @media (min-width: 768px) {
    padding: 24px 32px;
    width: 768px;
  }
  margin: 0 auto;
`;
