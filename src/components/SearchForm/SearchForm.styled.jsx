import styled from 'styled-components';
import { device } from 'vars/device';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;

  margin-bottom: 40px;

   @media ${device.tablet} {
    margin-top: 40px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 280px;
  height: 40px;
  background: ${p => p.theme.backgrounds.white};
  box-shadow: ${p => p.theme.shadows.searchBox};
  border-radius: 20px;
  border: none;
  padding: 9px 12px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: ${p => p.theme.fontColors.grey};
  outline: transparent;

  @media ${device.tablet}  {
    width: 608px;
    height: 44px;
    font-size: 20px;
    border-radius: 40px;
    padding: 9px 10px 9px 20px;
  }

  &:hover {
    border: 1px solid rgba(245, 146, 86, 0.5);
    box-shadow: ${p => p.theme.shadows.searchBox};
    border-radius: 20px;
  }

  &:focus {
    border: 1px solid rgba(245, 146, 86, 0.5);
    box-shadow: ${p => p.theme.shadows.searchBox};
    border-radius: 20px;
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

  @media ${device.tablet}  {
    width: 18px;
    height: 18px;
  }
`;
