import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;

  margin-bottom: 40px @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 280px;
  height: 40px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border: none;
  padding: 9px 12px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: #535353;

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 44px;
    font-size: 20px;
    border-radius: 40px;
    padding: 9px 10px 9px 20px;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 30%;
`;

export const IconSearch = styled.img`
  width: 15px;
  height: 15px;
  display: block;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
