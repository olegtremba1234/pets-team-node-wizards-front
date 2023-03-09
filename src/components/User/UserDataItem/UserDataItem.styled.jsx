import styled from 'styled-components';

export const UserItem = styled.ul`
  padding-top: 16px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }

  .userInfoItem {
    padding: 0 16px;
    display: flex;
    margin-bottom: 12px;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      padding: 0;
    }

    @media screen and (min-width: 1280px) {
      padding-right: 16px;
    }
  }

  .inputSpace {
    display: flex;
    padding-right: 16px;

    @media screen and (min-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  .userInfoName {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    width: 80px;
  }

  .buttItem {
    border: none;
    /* width: 0; */
    background-color: inherit;
    cursor: pointer;
  }
`;

export const InfoItem = styled.input`
  margin-right: 9px;
  border-radius: 40px;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  padding-left:15px;

  color: #111111;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-color: ${p => (p.disabled ? ' transparent' : '#F59256')};
  background: ${p => (p.disabled ? ' transparent' :' #FDF7F2')};
`;
// transparent
