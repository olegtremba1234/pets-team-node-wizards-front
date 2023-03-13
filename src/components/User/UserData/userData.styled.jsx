import styled from 'styled-components';

export const UserInfo = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  margin: auto;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 100%;
    border-radius: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 0px;
    height: 311px;
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1280px) {
    width: 411px;
    margin-left: 0;
    height: 541px;
    flex-direction: column;
  }
`;

export const ImageUser = styled.img`
  display: flex;
  width: 233px;
  height: 233px;
  object-position: center top;
  margin: 0 auto;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  object-fit: cover;
`;

export const ImageItem = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 40px;
    margin-top: 4px;
    width: 233px;
    height: 233px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 40px;
    margin-top: 4px;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 86px;
  height: 22px;
  left: 170px;
  top: 0px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  padding: 0;
  color: #111111;
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition: all 350ms ease-in-out;

  @media screen and (min-width: 768px) {
    margin: 0px;
    position: relative;
    left: 147px;
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    left: 200px;
    top: -22px;
  }

  :hover {
    color: ${p => p.theme.hoverButtonColor.primary};
    transition: color 350ms ease
  }
`;

export const DataItem = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 0px 52px 0px 32px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    width: 379px;
    margin-top: 36px;
  }
`;
