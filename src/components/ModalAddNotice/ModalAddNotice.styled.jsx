import styled from 'styled-components';
import { device } from 'vars/device';

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00000090;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: 0.5s;
  overflow: scroll;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;
  padding-bottom: 20px;
  height: max-content;
`;

export const FormWrapper = styled.div`
  background-color: ${p => p.theme.backgrounds.bodySecondary};
  border-radius: 20px;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 80px;
    border-radius: 40px;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Manrope';
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxl}px;
  line-height: 1.4;
  color: ${p => p.theme.fontColors.secondary};

  @media ${device.tablet} {
    font-weight: 600;
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
  }
`;

export const Form = styled.form`
  display: block;
  width: 240px;

  @media ${device.tablet} {
    width: 448px;
  }
`;

export const ModalText = styled.p`
  font-family: 'Manrope';
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.37;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${p => p.theme.fontColors.secondary};

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.l};
    letter-spacing: -0.01em;
    margin-bottom: 20px;
  }

  @media ${device.desktop} {
    font-size: ${p => p.theme.fontSizes.xl};
    margin-bottom: 28px;
  }
`;

export const Label = styled.label`
  position: relative;
  cursor: pointer;

  @media ${device.tablet} {
    display: block;
  }
`;

export const FieldRadioWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 18px;
  font-family: 'Manrope';
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.37;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  color: ${p => p.theme.fontColors.secondary};

  @media ${device.tablet} {
    margin-bottom: 28px;
  }
`;

export const CategoryLostFound = styled.span`
  display: flex;
  justify-content: center;
  padding: 6px 24px;
  background-color: ${p => p.theme.backgrounds.bodySecondary};
  top: 0;
  left: 0;

  border: 2px solid ${p => p.theme.backgrounds.loaderPrimary};
  border-radius: 40px;

  &:hover,
  &:focus {
    transform: ${p => p.theme.transition.first};
  }

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.37;
    padding: 8px 28px;
    margin-right: 12px;
    margin-bottom: 18px;
  }

  margin-bottom: 12px;

  &::after {
    content: 'Lost/found';
  }
`;

export const CategoryForFree = styled(CategoryLostFound)`
  &::after {
    content: 'In good hands';
  }
`;

export const CategorySell = styled(CategoryLostFound)`
  margin-left: 8px;

  &::after {
    content: 'Sell';
  }

  @media ${device.tablet} {
    margin: 0px;
  }
`;

export const InputRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${CategoryLostFound} {
    background: ${p => p.theme.backgrounds.buttonPrimary};
  }

  &:checked ~ ${CategoryLostFound} {
    color: ${p => p.theme.fontColors.white};
  }
`;

export const LabelTitle = styled.label`
  position: relative;
  font-family: 'Manrope';
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.44;
  color: ${p => p.theme.fontColors.secondary};

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: 1.1;
  }
`;

export const FieldRequired = styled.span`
  color: ${p => p.theme.fontColors.buttonSecondary};
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  width: 240px;
  height: 40px;

  border-radius: 40px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.36;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  background-color: ${p => p.theme.backgrounds.buttonSecondary} ;
  color: ${p => p.theme.fontColors.secondary};
  border: 2px solid #f59256;
  cursor: pointer;

  transition: ${p => p.theme.transition.first};

  &:first-child {
    margin-top: 16px;
  }

    &:hover {
      background-color: #e7884d;
    }
  }

  @media ${device.tablet} {
    width: 180px;
    height: 44px;

    &:not(:last-of-type) {
      margin-right: 20px;
    }

    &:not(:last-of-type) {
      margin-top: 0px;
    }
  }
`;

export const ErrorMsg = styled.div`
  position: absolute;
  top: 115%;
  margin-left: 8px;
  font-size: 14px;
  color: red;

  @media ${device.tablet} {
    top: 116%;
  }

  @media ${device.desktop} {
    top: 118%;
  }
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;
  padding: 11px 60px 12px 14px;
  margin: 8px 0px 16px 0px;

  color: ${p => p.theme.fontColors.inputTextColor};
  background-color: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: 40px;
  font-family: 'Manrope';
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.36em;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};

  transition: ${p => p.theme.transition.first};

  &:focus {
    background-color: rgba(0, 0, 0, 0.03);
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(245, 146, 86, 0.5);
  }

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }

  @media ${device.tablet} {
    width: 448px;
    height: 48px;
    padding: 14px 70px 13px 16px;
    margin: 10px 0px 16px 0px;

    font-size: 16px;
    line-height: 1.62;
  }

  @media ${device.desktop} {
    margin: 10px 0px 18px 0px;
  }
`;

export const ErrorMessage = styled.p`
  border: 1px solid rgb(255, 77, 77, 1);
`;
