import styled from 'styled-components';
import { device } from 'vars/device';

export const ErrorText = styled.p`
  position: absolute;

  margin-top: 1px;
  margin-left: 16px;
  font-size: 11px;
  color: red;
  @media ${device.tablet} {
    margin-left: 32px;
    max-width: 448px;
  }
`;
