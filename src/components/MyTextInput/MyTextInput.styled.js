import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 28px;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.1;
  color: ${p => p.theme.fontColors.primary};
`;

export const Input = styled.input`
  height: 48px;
  padding: 10px 16px;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.66;
  color: ${p => p.theme.fontColors.inputTextColor};
  background: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.borderRadius.main};

  &::-webkit-calendar-picker-indicator {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
