import styled from 'styled-components';
import { device } from 'vars/device';
import closeBtn from '../ModalAddNotice/images/closeBtn.svg'

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
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.4;
  color: ${p => p.theme.fontColors.secondary};

  @media ${device.tablet} {
    font-weight: 600;
    font-size: ${p => p.theme.fontSizes.xxxxl};
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

export const GenderMale = styled.img`
width: 40px;
height: 40px;
margin-bottom: 12px;

`;

export const GenderFemale = styled.img`

width: 40px;
height: 40px;
margin-bottom: 12px;

`;

export const Span = styled.span`

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

  &:checked ~ ${Span} {
    color: ${p => p.theme.fontColors.buttonSecondary};
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
    margin-top: 12px;
  }

    &:hover {
      background-color: #e7884d;
      color: white;
    }
  }

  @media ${device.tablet} {
    width: 180px;
    height: 44px;

    &:last-child {
      margin-top: 0;
    }

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

  transition: transform ${props => props.theme.transition.first};

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

export const ErrorInput = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${p => p.theme.fontColors.inputTextColor || '#4d4d4d'}
`;


export const GenderLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.44;
  color: $secondaryTextColor;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 42px;
  }

  &:hover,
  &:focus {
    color: $orangeColor;
  }


  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;

    &:not(:last-of-type) {
      margin-right: 80px;
      align-items: flex-start;
    }
  }

`;

export const FieldWrap = styled.div`
position: relative;
width: 240px;
border: none;
padding: 0px;
display: flex;
flex-wrap: wrap;
align-items: flex-end;
margin-bottom: 32px;



@media  ${device.tablet}  {
  width: 448px;
  margin-bottom: 18px;
}

@media  ${device.desktop}  {
  margin-bottom: 28px;
}
`;


export const AvatarLabel = styled.label`
position: relative;
margin: 8px 0px 28px 0px;
width: 116px;
height: 116px;
display: flex;

@media screen and (min-width: 768px) {
  width: 140px;
  height: 140px;
  margin: 8px 0px 16px 0px;
}

@media screen and (min-width: 1280px) {
  margin: 8px 0px 18px 0px;
}

`;


export const AddImage = styled.div`
  width: 116px;
  height: 116px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const SelectedImage = styled.img`
width: 116px;
height: 116px;
background: #fff;

@media screen and (min-width: 768px) {
  width: 140px;
  height: 140px;
}
`;


export const FileInput = styled.input`
  display: none;
`;

export const InputTextArea = styled.textarea`
display: flex;
align-items: center;
width: 240px;
min-height: 100px;
padding: 12px 14px;
margin: 24px 0 40px 0;

color: ${p => p.theme.fontColors.secondary} ;
background-color: ${p => p.theme.backgrounds.input} ;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 20px;
font-family: 'Manrope';
font-size: 14px;
line-height: 1.36em;
letter-spacing: 0.04em;

transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
resize: none;
overflow: hidden;

&:focus {
  background-color: rgba(0, 0, 0, 0.03);
  outline: 0;
  box-shadow: 0 0 0 0.1rem rgba(245, 146, 86, 0.5);
  outline: none;
}

&::placeholder {
  color: rgba(27, 27, 27, 0.6);
}

@media screen and (min-width: 768px) {
  width: 448px;
  height: 113px;
  padding: 16px 18px;
  margin: 8px 0px 28px 0px;

  font-size: 18px;
  line-height: 1.39em;
}
`;


export const Title = styled.h3`
margin-bottom: 18px;
`;


export const CloseButton = styled.button`
position: absolute;
left: 226px;
top: 20px;

width: 36px;
height: 36px;

border: none;
padding: 0;
background-color: transparent;

cursor: pointer;
  background-color: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-image: url(${closeBtn});

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
    background-size: 36px;
    left: 548px;
top: 24px;
  }
`;


export const ErrorText = styled.p`
  position: absolute;

  margin-top: 1px;
  margin-left: 16px;
  font-size: 11px;
  color: red;
  @media ${device.tablet} {
    margin-left: 32px;
    max-width: 448px;
  }
  `;