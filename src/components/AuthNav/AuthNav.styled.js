import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 28px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.357;
  letter-spacing: 0.04em;
  color: #111111;

  &.active {
    background-color: #f59256;
    color: #ffffff;
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    background-color: #f59256;
    color: #ffffff;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
    padding: 10px 28px;
  }
`;

export const AccountLink = styled(StyledLink)`
  background-color: #f59256;
  color: #ffffff;
  display: flex;
  gap: 12px;
  width: fit-content;
  margin: 0 auto;
  text-transform: capitalize;
`;

export const Ul = styled.ul`
  gap: 10px;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
