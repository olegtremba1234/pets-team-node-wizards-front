import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.backgrounds.buttonPrimary};
  background-color: ${p => p.theme.backgrounds.input};
cursor: pointer;

  & > svg {
    color: ${p => p.theme.fontColors.primary};
}
`;