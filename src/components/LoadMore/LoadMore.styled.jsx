import styled from 'styled-components';
import { device } from 'vars/device';

export const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  margin-top: 40px;

  @media ${device.tablet} {
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
  }
`;

export const LoadMorePage = styled.button`
width: 240px;
  height: 40px;
margin-top: 20px;
  display: block;
  margin: 0 auto;
  border-radius: 40px;
  background-color: white;
  color: black;
  border: 2px solid #F59256;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.36;
  letter-spacing: ${p => p.theme.fonts.letterSpacing};

  &:hover,
  &:focus {
    background-color: #ff6101;
    border-color: #ff6101;
  }

  &:disabled {
    cursor: none;
    filter: blur(1px);


`;
