import styled from 'styled-components';

export const BtnMain = styled.button`
  min-width: 180px;
  height: 44px;

  border: 2px solid #f59256;
  border-radius: 40px;

  &::after {
    content: '${props => props.content}';
    //   font-family: NEED TO FULL THIS FIELD!!!!!!!!!!!!!!!!!!!!!!;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    text-align: center;
  }

  background-color: transparent;
  color: #111111;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #f59256;
    color: #ffffff;
  }
  :active {
    background-color: #f59256;
    color: #ffffff;
  }
`;
