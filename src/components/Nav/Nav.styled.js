import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    gap: 60px;
    margin-top: 88px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 80px;
    margin-top: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: ${p => p.theme.fontFamily.main}, sans-serif;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxxl_increased};
  line-height: 1.375;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};
  color: ${p => p.theme.fontColors.navFont};
  transition: all 350ms ease-in-out;
  &::after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    background: ${p => p.theme.fontColors.buttonSecondary};
    transition: 350ms;
  }

  &.active,
  &.active::after {
    color: ${p => p.theme.fontColors.buttonSecondary};
    width: 100%;
    font-weight: ${p => p.theme.fontWeights.bold};
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.fontColors.buttonSecondary};
  }
  &:hover:not(.active)::after,
  :focus-visible:not(.active)::after {
    width: 100%;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxxl_increased};
    line-height: 1.35;
  }
  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
