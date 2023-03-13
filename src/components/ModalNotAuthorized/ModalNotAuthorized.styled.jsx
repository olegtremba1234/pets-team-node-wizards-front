import styled from 'styled-components';
import { device } from 'vars/device';
import img from '../ModalNotAuthorized/image/pets.png'

export const ModalBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;


export const  ModalText = styled.div`
margin-top: 20px;
fonts-size: 28px
`;

export const Overlay = styled.div`
height: 100%;
width: 100%;
position: fixed;
background-color: rgba(0, 0, 0, 0.4);
z-index: 10;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`;


export const ModalWindow = styled.div`

  border-radius: 40px;
  position: relative;
  overflow: auto;

  max-height: 90vh;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    overflow-y: hidden;
  }
`;

export const ModalWrap = styled.div`

background-image: url(${img});
background-color: #FDF7F2;
background-position: bottom left;
background-size: contain;
background-repeat: no-repeat;
padding: 60px 15px 30px;
text-align: center;
display: grid;

grid-template-rows: 1fr 1fr 1fr;
@include mq(tablet) {
  padding: 60px 20px 30px;
}
`;


export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media ${device.tablet} {
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
  }
`;
export const Btn = styled.button`
  width: 220px;
  height: 40px;

  border-radius: 40px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.36;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  background-color: ${p => p.theme.backgrounds.buttonSecondary};
  color: ${p => p.theme.fontColors.secondary};
  border: 2px solid #f59256;
  cursor: pointer;

  transition: ${p => p.theme.transition.first};

  &:first-child {
    margin-top: 12px;
  }

  &:hover,
  &:focus {
    background-color: #ff6101;
    border-color: #ff6101;
  }

  @media ${device.tablet} {
    width: 160px;
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

