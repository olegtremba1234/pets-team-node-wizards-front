import styled from 'styled-components';

export const LoqoutIcons = styled.div`
  // іконка логаут на картці юзера
  width: 18px;
  height: 18px;
  fill: #f59256;
  stroke: #f59256;
  transition: all 350ms ease-in-out;
  :hover {
    fill: ${p => p.theme.hoverButtonColor.primary};
    transition: color 350ms ease
  }
`;
export const UserAvatarIcons = styled.div`
  margin-right: 5px;
  fill: #f59256;
  width: 19px;
  height: 19px;
`;

export const IconsRed = styled.div`
  width: 20px;
  height: 20px;
  fill: '#1111118c';
  fill-opacity: 0.6;
  border-radius: 50%;
  transition: all 350ms ease-in-out;
  :hover {
    fill: ${p => (p.isLocked ? ' #111111' : p.theme.hoverButtonColor.primary)};
    transition: color 350ms ease
  }
`;

export const IconsDone = styled.div`
  width: 20px;
  height: 20px;
  fill: #f59256;
  fill-rule: evenodd;
  clip-rule: evenodd;
  border-radius: 50%;
`;

export const PetsAddIcon = styled.div`
  stroke: #ffffff;
  stroke-width: 2;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f59256;
  transition: all 350ms ease-in-out;
  :hover {
    fill: ${p => p.theme.hoverButtonColor.primary};
    transition: color 350ms ease
  }
`;

export const CardIcons = styled.div`
  width: 20px;
  height: 20px;
  fill: ${p => (p.disabled ? ' transparent' : ' #111111')};
  fill-opacity: 0.6;
  transition: all 350ms ease-in-out;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  :hover {
    fill: ${p => p.theme.hoverButtonColor.primary};
    transition: color 350ms ease
  }
`;
export const UserRemoveAvatar = styled.div`
  width: 233px;
  height: 233px;
  color: #111;
  stroke-linecap: round;
  stroke-opacity: 0.6;
  stroke-width: 2;
`;
