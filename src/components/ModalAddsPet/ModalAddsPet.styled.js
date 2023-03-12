import styled from 'styled-components';
import { device } from 'vars/device';

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
  z-index: 100;
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
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: absolute;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${p => p.theme.backgrounds.bodySecondary};
  box-shadow: ${p => p.theme.shadows.modal};
  border-radius: ${p => p.theme.borderRadius.main};

  width: 280px;
  padding: 40px 20px;

  @media ${device.tablet} {
    width: 608px;
    padding: 40px 80px;

    &.step-2 {
      padding: 40px 106px;
    }
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 28px;
  text-align: center;

  &.step-2 {
    margin-bottom: 20px;
  }

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.36;
  color: ${p => p.theme.fontColors.primary};

  @media ${device.tablet} {
    margin-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.xxxxl};

    &.step-2 {
      margin-bottom: 20px;
    }
  }
`;

export const LabelAvatar = styled.label`
  display: flex;
  flex-direction: column;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.37;
  color: ${p => p.theme.fontColors.primary};

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: 1.1;
  }
`;

export const InputAvatarWrapper = styled.button`
  width: 208px;
  height: 208px;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.66;
  color: ${p => p.theme.fontColors.inputTextColor};
  background: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.borderRadius.main};

  @media ${device.tablet} {
    width: 182px;
    height: 182px;
  }
`;

export const AddedImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 208px;
  border-radius: ${p => p.theme.borderRadius.main};

  @media ${device.tablet} {
    width: 182px;
    height: 182px;
  }
  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
`;

export const InputAvatar = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 24px;
    padding-top: 12px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  border-radius: ${p => p.theme.borderRadius.main};
  padding: 2px 2px;

  @media ${device.tablet} {
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }

  cursor: pointer;
  border: none;
  background: ${p => p.theme.backgrounds.input};

  :hover,
  :focus {
    background-color: ${p => p.theme.hoverButtonColor.primary};
    color: ${p => p.theme.fontColors.white};
  }
  :active {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
`;

export const BtnMain = styled.button`
  min-width: 240px;
  height: 40px;
  z-index: 101;

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

  &.emphasis-btn {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.hoverButtonColor.primary};
    color: ${p => p.theme.fontColors.white};
  }
  :active {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }

  @media ${device.tablet} {
    min-width: 180px;
    height: 44px;
  }
`;
