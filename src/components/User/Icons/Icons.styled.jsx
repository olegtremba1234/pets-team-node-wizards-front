import styled from 'styled-components';

export const LoqoutIcons = styled.div`
  // іконка логаут на картці юзера
  width: 18px;
  height: 18px;
  fill: #f59256;
  stroke: #f59256;
`;
export const UserAvatarIcons = styled.div`
  // іконка карери на картці юзера
  margin-right: 5px;
  fill: #f59256;
  width: 19px;
  height:19px;
`;

export const IconsRed = styled.div`
  width: 20px;
  height: 20px;
  fill: ${p => (p.disabled ? '#1111118c' : '#f59256')};
  fill-opacity: 0.6;
  background-color: #fdf7f2;
  border-radius: 50%;

  
`;

export const IconsDone = styled.div`
  width: 20px;
  height: 20px;
  fill: #f59256;
  fill-rule: evenodd;
  clip-rule: evenodd;
  background-color: #fdf7f2;
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
  background-color: #F59256;

`;

export const CardIcons = styled.div`
  width: 20px;
  height: 20px;
  fill: #111111;
  fill-opacity: 0.6;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const UserRemoveAvatar = styled.div`
        width: 233px;
        height: 233px;
        color: #111;
        stroke-linecap: round;
        stroke-opacity: .6;
        stroke-width: 2;

`
