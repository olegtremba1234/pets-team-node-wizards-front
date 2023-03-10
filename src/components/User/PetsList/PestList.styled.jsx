import styled from 'styled-components';

export const PetsDescribed = styled.ul`
  margin-top: 42px;
  font-size: 14px;

  @media screen and (min-width: 1280px) {
    margin-top: 24px;
  }
`;

export const PetsDescribedItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 40px;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    border-radius: 40px;
    flex-direction: row;
  }
`;

export const ItemList = styled.div`
  
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const ButtonDel = styled.button`
  position: relative;
  top: 2px;
  left: calc(100% - 30px);
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export const Image = styled.img`
  display: flex;
  width: 240px;
  height: 240px;
  object-position: center top;
  border-radius: 20px;
  margin: auto;
  margin-bottom: 17px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const DescribedItem = styled.div`
  margin-top: -20px;
`;

export const Item = styled.p`
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;
