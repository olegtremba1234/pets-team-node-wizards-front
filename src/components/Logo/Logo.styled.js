import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${p => p.theme.fontFamily.secondary}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: 1.5;
  letter-spacing: 0.07em;
  text-transform: lowercase;
  color: ${p => p.theme.fontColors.primary};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxl_increased};
  }
`;

export const Span = styled.span`
  color: ${p => p.theme.fontColors.buttonSecondary};
`;

export const StyledP = styled.p`
  text-decoration: none;
  font-family: ${p => p.theme.fontFamily.secondary}, sans-serif;
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: 1.5;
  letter-spacing: 0.07em;
  text-transform: lowercase;
  color: ${p => p.theme.fontColors.primary};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxl_increased};
  }
`;
