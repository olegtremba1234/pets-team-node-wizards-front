import styled from 'styled-components';

export const Pets = styled.div`
  width: 280px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding-left: 32px;
  }

  @media screen and (min-width: 768px) {

  }

`;

export const AddPets = styled.div`
  display: flax;
  width: 100%;
  justify-content: space-between;
  padding: 0;
  margin-top: 46px;
  font-size: 20px;
  height: 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0px;
    font-size: 28px;
  }
`;
export const ButtonIcon = styled.button`
  display: flex;
  border: none;
  background-color: inherit;
  font-size: 20px;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    font-size: 28px;

  }
`;

export const ButtonBack = styled.div`
  display: flex;
  border: none;
  background-color: #f59256;
  margin-left: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;

  align-items: center;
`;
