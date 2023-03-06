import styled from "styled-components";
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
font-size:  ${p => p.theme.fontSizes.xxl}px;
line-height: 1.4;
color: ${p => p.theme.fontColors.secondary};

@media ${device.tablet} {
font-weight: 600;
font-size:  ${p => p.theme.fontSizes.xxxxl}px;
}
`;


export const Form = styled.form`
display: block;
width: 240px;

@media ${device.tablet}  {
  width: 448px;
}
`;

export const ModalText = styled.p`

font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: -0.01em;
  color: $textColor;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: -0.01em;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 28px;
  }
`;

export const Label = styled.label`
display: flex;
position: relative;
cursor: pointer;

@media screen and (min-width: 768px) {
  display: block;
}

`;


export const CategoryLostFound = styled.span`
top: 0;
  left: 0;
  background-color: ${p => p.theme.backgrounds.bodySecondary};
  display: flex;
  justify-content: center;
  padding: 6px 24px;
  border: 2px solid ${p => p.theme.backgrounds.loaderPrimary};
  border-radius: 40px;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &::after {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.37;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: $secondaryTextColor;

    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.37;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px 28px;
    margin-right: 12px;
  }

   margin-bottom: 12px;

  &::after {
    content: 'Lost/found';
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const CategoryForFree = styled.span`
&::after {
  content: 'In good hands';
}

top: 0;
  left: 0;
  background-color: ${p => p.theme.backgrounds.bodySecondary};
  display: flex;
  justify-content: center;
  padding: 6px 24px;
  border: 2px solid ${p => p.theme.backgrounds.loaderPrimary};
  border-radius: 40px;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &::after {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.37;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: $secondaryTextColor;

    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.37;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px 28px;
    margin-right: 12px;
  }

`;
export const CategorySell = styled.span`

  top: 0;
  left: 0;
  background-color: ${p => p.theme.backgrounds.bodySecondary};
  display: flex;
  justify-content: center;
  padding: 6px 24px;
  border: 2px solid ${p => p.theme.backgrounds.loaderPrimary};
  border-radius: 40px;

  margin-left: 8px;
  &::after {
    content: 'Sell';
  }

  @media screen and (min-width: 768px) {
    margin: 0px;
  }

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &::after {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.37;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: $secondaryTextColor;

    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.37;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px 28px;
    margin-right: 12px;
  }



`;
export const FieldRadioWrap = styled.div`
margin-bottom: 18px;

@media (min-width: 768px) and (max-width: 1279px) {
  margin-bottom: 10px;
}
`;

export const InputRadio  = styled.input`

  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked~${CategoryForFree} {
    background: ${p => p.theme.backgrounds.buttonPrimary}

  }
  &:checked~${CategoryLostFound} {
    background: ${p => p.theme.backgrounds.buttonPrimary}
  }
  &:checked~${CategorySell} {
    background: ${p => p.theme.backgrounds.buttonPrimary}
  }

  &:checked~${CategoryForFree}:after {
    color: ${p => p.theme.fontColors.white}
  }
  &:checked~${CategoryLostFound}:after {
    color: ${p => p.theme.fontColors.white}
  }
  &:checked~${CategorySell}:after {
    color: ${p => p.theme.fontColors.white}
  }
`;


export const LabelTitle = styled.label`
  position: relative;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.44;
  color: $textColor;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.1;
  }

`;

export const FieldRequired = styled.span`
color: orange;
`;


export const ButtonWrap = styled.div`
display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
  }
`;


export const Button = styled.button`
width: 240px;
height: 40px;

border-radius: 40px;
font-weight: 500;
font-size: 16px;
line-height: 1.36;
letter-spacing: 0.04em;
background-color: #fff;
color: $textColor;
border: 2px solid #f59256;
cursor: pointer;

transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);

&:first-child {
  margin-top: 16px;
}

&:last-of-type {
  color: $lightColor;
  border: none;
  background-color: $orangeColor;

  &:hover {
    background-color: #e7884d;
  }
}

@media screen and (min-width: 768px) {
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
  color: $errorColor;

  @media screen and (min-width: 768px) {
    top: 116%;
  }

  @media screen and (min-width: 768px) {
    top: 118%;
  }

`;


export const Input = styled.input`

width: 240px;
height: 40px;
padding: 11px 60px 12px 14px;
margin: 8px 0px 16px 0px;

color: $textColor;
background-color: $bakgroundColor;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
font-family: 'Manrope';
font-size: 14px;
line-height: 1.36em;
letter-spacing: 0.04em;

transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

&:focus {
  background-color: rgba(0, 0, 0, 0.03);
  outline: 0;
  box-shadow: 0 0 0 0.1rem rgba(245, 146, 86, 0.5);
}

&::placeholder {
  color: rgba(27, 27, 27, 0.6);
}

@media screen and (min-width: 768px) {
  width: 448px;
  height: 48px;
  padding: 14px 70px 13px 16px;
  margin: 10px 0px 16px 0px;

  font-size: 16px;
  line-height: 1.62;
}

@media screen and (min-width: 1280px) {
  margin: 10px 0px 18px 0px;
}
`;
