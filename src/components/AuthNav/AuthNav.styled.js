import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
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
  &:hover,
  &:focus {
    background-color: #f59256;
    color: #ffffff;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
    padding: 10px 28px;
  }
`;
