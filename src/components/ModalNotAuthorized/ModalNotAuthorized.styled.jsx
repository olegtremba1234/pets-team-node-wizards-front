import styled from 'styled-components';
import { device } from 'vars/device';
import img from '../ModalNotAuthorized/image/pets.png';
import closeBtn from '../ModalNotAuthorized/image/closeBtn.svg';

export const ModalBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const ModalText = styled.p`
fonts-size: 35px
font-family: 'Manrope';
font-weight: 500;
margin-bottom: 25px;

@media ${device.tablet} {
  fonts-size: 50px
  margin-bottom: 35px;
}
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
  width: 240px;
  border-radius: 40px;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    background: transparent;
    overflow-y: hidden;
  }

  @media ${device.tablet} {
    width: 350px;
  }
`;

export const ModalWrap = styled.div`
  background-image: url(${img});
  background-color: #fceee2;
  background-position: 50% 6%;
  background-size: 140px;
  background-repeat: no-repeat;
  padding: 40px 15px;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 60px 20px 40px;
  }
`;

export const ButtonWrap = styled.div`
  @media ${device.tablet} {
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
  }
`;
export const Btn = styled.button`
  width: 210px;
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
  &:last-of-type {
    margin-top: 5px;
  }

  &:hover,
  &:focus {
    background-color: #ff6101;
    border-color: #ff6101;
  }

  @media ${device.tablet} {
    width: 310px;
    height: 44px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.4;
  color: ${p => p.theme.fontColors.secondary};

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.xxxl};
    margin-bottom: 30px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  left: 200px;
  top: 20px;

  width: 12px;
  height: 12px;

  border: none;
  padding: 0;
  background-color: transparent;

  cursor: pointer;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-image: url(${closeBtn});

  @media screen and (min-width: 768px) {
    top: 18px;
    width: 20px;
    height: 20px;
    left: 302px;
  }
`;
