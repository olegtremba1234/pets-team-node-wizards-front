import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.04em;
  padding: 0;
  color: #111111;
  border: none;
  background-color: inherit;
  width: 89px;
  margin-top: 44px;
  margin-left: 170px;
  justify-content: space-between;
  font-size: 16px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-left: 0px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 15px;
    margin-bottom: 0px;
  }

  :hover {
    color: ${p => p.theme.hoverButtonColor.primary};
  }
`;
