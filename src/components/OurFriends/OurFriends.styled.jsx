import styled from 'styled-components';
import { device } from 'vars/device';

export const FriendsWrap = styled.section`
  padding-top: 45px;
  padding-bottom: 100px;
  background: ${p => p.theme.backgrounds.bodyPrimary};

  @media ${device.tablet} {
    padding-top: 95px;
  }

  @media ${device.desktop} {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;

export const StyledContainer = styled.div`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
  }
  @media ${device.desktop} {
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
  color: ${p => p.theme.fontColors.secondary};

  @media ${device.tablet} {
    font-size: 48px;
  }
`;

export const FriendsCardsWrap = styled.div`
  margin-top: 40px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FriendsCardsItem = styled.div`
  width: 280px;
  min-height: 192px;
  padding: 12px 4px;

  border-radius: 20px;
  background-color: ${p => p.theme.backgrounds.buttonSecondary};
  box-shadow: ${p => p.theme.shadows.searchBox};

  @media ${device.tablet} {
    width: 336px;
    min-height: 246px;
    padding: 12px 10px;
  }

  @media ${device.desktop}{
    width: 395px;
    min-height: 287px;
    padding: 16px;
  }
`;

export const FriendsName = styled.h3`
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  color: ${p => p.theme.fontColors.buttonSecondary};
  text-decoration: underline;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.4;
  }

  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;

  @media ${device.tablet}{
    margin-top: 16px;
  }
`;

export const CardLeftWrapper = styled.div`
  width: 110px;

  @media ${device.desktop}) {
    width: auto;
  }
`;

export const CardImg = styled.img`
  display: block;
  width: 110px;
  height: 78px;

  @media ${device.desktop} {
    width: 158px;
    height: 112px;
  }
`;

export const CardsList = styled.ul`
  width: 150px;

  @media ${device.tablet} {
    width: 170px;
  }

  @media ${device.desktop} {
    width: 190px;
  }
`;

export const CardMenu = styled.ul`
  position: absolute;
  background-color: white;
  display: none;


  width: 120px;
  padding: 12px;
  border: 1px solid #F59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const CardsItem = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33em;

  &:first-child {
    cursor: pointer;
    &:hover {
      color: ${p => p.theme.hoverButtonColor.primary};
      transform: color;
    }
  }
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:first-child:hover ${CardMenu} {
    display: block;
    transition: ${p => p.theme.transition.first}
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 1.357em;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media ${device.desktop} {
    font-size: 16px;
    line-height: 1.375em;
  }
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
  color: ${p => p.theme.fontColors.secondary};
  text-decoration: underline;
`;

export const CardLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color:  ${p => p.theme.fontColors.buttonSecondary};
    transition: ${p => p.theme.transition.first}
  }
  &:focus {
    color:  ${p => p.theme.fontColors.buttonSecondary};
    transition: ${p => p.theme.transition.first}
  }
`;
