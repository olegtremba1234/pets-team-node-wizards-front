import styled from 'styled-components';
import { device } from 'vars/device';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 16px;

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.44;
  color: ${p => p.theme.fontColors.primary};

  @media ${device.tablet} {
    gap: 12px;
    margin-bottom: 28px;

    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: 1.1;
  }
`;

export const Textarea = styled.textarea`
  height: 100px;
  padding: 10px 16px;
  resize: none;

  @media ${device.tablet} {
    height: 116px;
  }

  font-family: ${p => p.theme.fontFamily.main};
  font-style: ${p => p.theme.fontStyle.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.66;
  color: ${p => p.theme.fontColors.inputTextColor};
  background: ${p => p.theme.backgrounds.input};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.borderRadius.secondary}
`;