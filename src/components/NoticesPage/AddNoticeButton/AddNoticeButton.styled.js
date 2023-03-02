import styled from 'styled-components';

export const Button = styled.button`
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
  }
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
