import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${p => p.theme.backgrounds.modalOverlay};
  backdrop-filter: ${p => p.theme.backgrounds.backdrop};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: ${p => p.theme.shadows.modal};
  border-radius: ${p => p.theme.borderRadius.main};
  width: 608px;
  padding: 40px 80px;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 28px;
  text-align: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  color: ${p => p.theme.fontColors.primary};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 28px;

  &:last-of-type {
    margin-bottom: 40px;
  }

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.1;
  color: ${p => p.theme.fontColors.primary};
`;

export const Input = styled.input`
  height: 48px;
  padding: 10px 16px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.66;
  color: ${p => p.theme.fontColors.inputTextColor};
  background: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.borderRadius.main};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: ${p => p.theme.borderRadius.main};
  padding: 2px 2px;

  border: none;
  background: ${p => p.theme.backgrounds.input};
`;
