import styled from 'styled-components';


export const FriendsWrap = styled.section`
  padding-top: 45px;
  padding-bottom: 100px;
  background: #fdf7f2;

  @media screen and (min-width: 768px) {
    padding-top: 95px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 200px;
  }

`;

export const StyledContainer = styled.div`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;


  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const FriendsTitle = styled.h2`
margin: 0 auto;
text-align: center;
font-family: 'Manrope';
font-weight: 700;
font-size: 24px;
line-height: 1.4;
color: #000000;

@media screen and (min-width: 768px) {
  font-size: 48px;
}

`;


export const FriendsCardsWrap = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;

  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FriendsCardsItem = styled.div`
  width: 280px;
  min-height: 192px;
  padding: 12px 4px;

  border-radius: 20px;
  background-color: #FFFFFF;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);


  @media screen and (min-width: 768px) {
    width: 336px;
    min-height: 246px;
    padding: 12px 10px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    min-height: 287px;
    padding: 16px;
  }

`;


export const FriendsName = styled.h3`
font-size: 12px;
line-height: 1.3;
text-align: center;
color: #F59256;
text-decoration: underline;

@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 1.4;
}

@media screen and (min-width: 1280px) {
  font-size: 20px;
}
`;



export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`;


export const CardLeftWrapper = styled.div`
  width: 110px;

  @media screen and (min-width: 1280px) {
    width: auto;
  }
  `;


  export const CardImg = styled.img`
  display: block;
  width: 110px;
  height: 78px;

  @media screen and (min-width: 1280px){
    width: 158px;
    height: 112px;
  }
  `;


export const CardsList = styled.ul`
width: 150px;

@media screen and (min-width: 768px){
  width: 170px;
}

@media screen and (min-width: 1280px) {
  width: 190px;
}
`;

export const CardsItem = styled.li`
font-weight: 500;
  font-size: 12px;
  line-height: 1.33em;

  &:first-child {
    cursor: pointer;
    &:hover {
      color: #FF6101;
      transform: color;
    }
  }
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:first-child:hover .subMenu {
    display: block;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.357em;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375em;
  }
`;

export const CardMenu = styled.ul`
position: absolute;
  background-color: white;
  display: none;

  width: 120px;
  padding: 12px;
  border: 1px solid $orangeColor;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const CardMenuItem = styled.li`
display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  font-size: 12px;
  line-height: 1.33em;
  color: black;

  &:last-child {
    margin-bottom: 0;
  }
`;


export const CardAddress = styled.a`
color: #000000;
text-decoration: underline;

`;


export const CardLink = styled.a`
color: inherit;
text-decoration: none;
&:hover {
  color: #F59256;
}
&:focus {
  color:  #F59256;
}
`;
