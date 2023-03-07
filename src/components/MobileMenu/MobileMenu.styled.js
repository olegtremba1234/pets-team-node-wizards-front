import styled, { keyframes } from 'styled-components';

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
  padding: 16px 20px;

  @media (min-width: 768px) {
    padding: 24px 32px;
  }
  animation: ${fadeInOut} 500ms ease-in-out;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px transparent solid;
  position: absolute;
  top: 16px;
  right: 20px;
  @media (min-width: 768px) {
    top: 24px;
    right: 32px;
  }
`;
