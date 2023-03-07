import styled from 'styled-components';

export const DivMobile = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fdf7f2;
  padding: 16px 20px;

  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px transparent solid;
  position: absolute;
  top: 16px;
  right: 20px;
  @media (min-width: 768px) {
    top: 24px;
    right: 32px;
  }
`;
