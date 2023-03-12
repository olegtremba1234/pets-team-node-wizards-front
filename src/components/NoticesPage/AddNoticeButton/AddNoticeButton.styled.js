import styled from 'styled-components';
import { theme } from 'vars/theme';

export const Button = styled.button`
  cursor: pointer;
  color: #111111;
  background-color: transparent;
  border: none;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  gap: 12px;
  align-items: center;
  transition: ${theme.transition.first};
  &:hover {
    background-color: ${theme.hoverButtonColor.primary};
    border-radius: 30px;
    color: #fff;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    background: #f59256;
    border-radius: 50%;
    flex-direction: column;
    width: 80px;
    height: 80px;
    justify-content: center;
    line-height: 16px;
    color: #ffffff;
    gap: 10px;
    position: fixed;
    z-index: 1;
    bottom: 10px;
    right: 20px;
  }

  @media (min-width: 768px) {
    width: 195px;
  }

  @media (min-width: 1280px) {
    width: 150px;
  } ;
`;

export const Span = styled.span`
  background: #f59256;
  border-radius: 50%;
  color: #fff;
  font-size: 45px;
  @media (min-width: 767px) {
    width: 44px;
    height: 44px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
