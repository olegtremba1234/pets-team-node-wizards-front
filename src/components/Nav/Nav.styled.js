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
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 80px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.375;
  letter-spacing: 0.04em;

  color: #181c27;
  &.active {
    color: #f59256;
    text-decoration-line: underline;
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #f59256;
    text-decoration-line: underline;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
  }
`;
