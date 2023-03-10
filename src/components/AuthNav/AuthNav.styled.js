import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  background-color: ${p => p.theme.backgrounds.buttonSecondary};
  border: 2px solid #f59256;
  border-radius: ${p => p.theme.borderRadius.main};
  padding: 8px 28px;
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.357;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  color: ${p => p.theme.fontColors.primary};
  transition: all 350ms ease;
  &.active {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.35;
    padding: 10px 28px;
  }
`;

export const AccountLink = styled(StyledLink)`
  background-color: ${p => p.theme.backgrounds.buttonPrimary};
  color: ${p => p.theme.fontColors.white};
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  margin: 0 auto;
  text-transform: capitalize;
  &:hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.hoverButtonColor.primary};
  }
`;

export const Ul = styled.ul`
  gap: 10px;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    margin: 0;
    margin-right: 25px;
  }
  @media (min-width: 1280px) {
    margin: 0;
  }
`;

export const LoginStyledLink = styled(StyledLink)`
  background-color: ${props => props.mode.backgroundColor};
  color: ${props => props.mode.color};
  &:hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${props => props.mode.hover};
  }
`;

export const AccountIcon = styled(FaUserCircle)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
