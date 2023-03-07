import styled from 'styled-components';

export const BtnMain = styled.button`
  min-width: 180px;
  height: 44px;

  border: ${p => p.theme.borders.buttonModal};
  border-radius: ${p => p.theme.borderRadius.main};

  &::after {
    content: '${props => props.content}';
    font-family: ${p => p.theme.fontFamily.main};
    font-style: ${p => p.theme.fontStyle.main};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.35;
    letter-spacing: ${p => p.theme.fonts.letterSpacing};
    text-align: center;
  }

  background-color: transparent;
  color: ${p => p.theme.fontColors.buttonPrimary};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
  :active {
    background-color: ${p => p.theme.backgrounds.buttonPrimary};
    color: ${p => p.theme.fontColors.white};
  }
`;
