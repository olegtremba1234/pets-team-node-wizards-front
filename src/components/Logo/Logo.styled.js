import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  text-transform: lowercase;
  color: #111111;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Span = styled.span`
  color: #f59256;
`;
