import styled from 'styled-components';

export const ButtonIcon = styled.button`
  display: flex;
  border: none;
  background-color: inherit;
  font-size: 20px;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    font-size: 28px;

  }
`;

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
  background: ${p => p.theme.backgrounds.bodySecondary};
  box-shadow: ${p => p.theme.shadows.modal};
  border-radius: ${p => p.theme.borderRadius.main};
  width: 608px;
  padding: 40px 80px;

  &.step-2 {
    padding: 40px 106px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;

  &.step-2 {
    margin-bottom: 20px;
  }

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxxxl};
  line-height: 1.36;
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

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.1;
  color: ${p => p.theme.fontColors.primary};
`;

export const LabelAvatar = styled.label`
  display: flex;
  flex-direction: column;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.1;
  color: ${p => p.theme.fontColors.primary};
`;

export const Input = styled.input`
  height: 48px;
  padding: 10px 16px;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.66;
  color: ${p => p.theme.fontColors.inputTextColor};
  background: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.borderRadius.main};
`;

export const InputAvatar = styled.input`
  width: 182px;
  height: 182px;
  padding: 10px 16px;
  /* background-image: url(../../icons/plus.svg); */

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.66;
  color: ${p => p.theme.fontColors.inputTextColor};
  background: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.borderRadius.main};
`;

export const Textarea = styled.textarea`
  height: 116px;
  padding: 10px 16px;
  resize: none;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.66;
  color: ${p => p.theme.fontColors.inputTextColor};
  background: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.borderRadius.secondary};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
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

  cursor: pointer;
  border: none;
  background: ${p => p.theme.backgrounds.input};

  :hover,
  :focus {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
  :active {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
`;

export const BtnMain = styled.button`
  min-width: 180px;
  height: 44px;

  border: ${p => p.theme.borders.buttonModal};
  border-radius: ${p => p.theme.borderRadius.main};

  &::after {
    content: '${props => props.content}';
    font-family: ${p => p.theme.fontFamily.main};
    font-style: ${p => p.theme.fontStyle.main};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.35;
    letter-spacing: ${p => p.theme.fonts.letterSpacing};
    text-align: center;
  }

  background-color: transparent;
  color: ${p => p.theme.fontColors.buttonPrimary};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
  :active {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
`;
