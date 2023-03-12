import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

export const ModalWindow = styled.div`
  width: 280px;
  background-color: ${p => p.theme.backgrounds.bodySecondary};
  border-radius: ${p => p.theme.borderRadius.secondary};
  padding: 60px 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  @media (min-width: 768px) {
    width: 705px;
    padding: 32px 20px;
    border-radius: ${p => p.theme.borderRadius.main};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;
  position: relative;
  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  width: 158px;
  height: 28px;
  position: absolute;
  left: 20px;
  top: 80px;
  border-radius: 0 25px 25px 0;
  @media (min-width: 768px) {
    left: 20px;
    top: 58px;
  }
`;

export const CategoryText = styled.p`
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.333;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  color: ${p => p.theme.fontColors.primary};
`;

export const H3 = styled.h3`
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.375;
  letter-spacing: -0.01em;
  color: ${p => p.theme.fontColors.secondary};
  margin-bottom: 15px;
  overflow-wrap: break-word;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
    line-height: 1.357;
    margin-bottom: 20px;
    overflow-wrap: break-word;
    max-width: 320px;
  }
`;

export const CloseIcon = styled(GrClose)`
  width: 28px;
  height: 28px;
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  @media (min-width: 768px) {
    gap: 50px;
    display: flex;
  }
`;

export const Ul = styled.ul`
  display: grid;
  gap: 8px;
`;

export const KeyLi = styled.li`
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.357;
  color: ${p => p.theme.fontColors.secondary};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    max-height: 22px;
  }
`;

export const ValueLi = styled.li`
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.357;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 20px;
  color: ${p => p.theme.fontColors.secondary};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    max-height: 22px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.357;
  color: ${p => p.theme.fontColors.secondary};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  &:hover,
  :focus {
    color: ${p => p.theme.backgrounds.buttonPrimary};
  }
  transition: all 300ms ease-in-out;
`;

export const Comment = styled.p`
  margin-top: 28px;
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.357;
  letter-spacing: 0.04em;
  color: ${p => p.theme.fontColors.secondary};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;
  }
`;

export const SpanComment = styled.span`
  font-weight: 600;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  border-radius: ${p => p.theme.borderRadius.main};
  padding: 2px 2px;
  cursor: pointer;
  border: none;
  background-color: ${p => p.theme.backgrounds.input};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover,
  :focus {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  transition: all 350ms ease-in-out;
`;

export const ButtonWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 32px;
    margin-left: auto;
    width: fit-content;
    flex-direction: row-reverse;
  }
`;

export const Li = styled.li`
  width: 100%;
`;

export const HeartIcon = styled(FaHeart)`
  fill: ${p => p.theme.backgrounds.buttonPrimary};
  width: 16px;
  height: 16px;
  transition: all 350ms ease-in-out;
`;

export const ButtonAdd = styled.button`
  width: 240px;
  background-color: ${p => p.theme.backgrounds.bodySecondary};
  color: ${p => p.theme.fontColors.primary};
  border: 2px solid #f59256;
  border-radius: ${p => p.theme.borderRadius.main};
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.375;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 7px 52px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
    ${HeartIcon} {
      fill: ${p => p.theme.backgrounds.bodySecondary};
    }
  }
  transition: all 350ms ease-in-out;
  @media (min-width: 768px) {
    width: 160px;
    padding: 7px 35px;
  }
`;

export const ButtonRemoveFromFavorite = styled(ButtonAdd)`
  @media (min-width: 768px) {
    min-width: 160px;
    padding: 7px 0;
  }
`;

export const LinkContact = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.backgrounds.buttonPrimary};
  border-radius: ${p => p.theme.borderRadius.main};
  width: 240px;
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.375;
  display: flex;
  align-items: center;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  color: ${p => p.theme.fontColors.white};
  padding: 7px 85px;
  border: 2px solid transparent;

  @media (min-width: 768px) {
    width: 160px;
    padding: 7px 45px;
  }
  &:hover,
  :focus {
    background-color: ${p => p.theme.hoverButtonColor.primary};
  }
  transition: all 350ms ease-in-out;
`;
