import styled from 'styled-components';

export const UserItem = styled.ul`
  padding-top: 16px;

  .userInfoItem {
    padding: 0 16px;
    display: flex;
    margin-bottom: 12px;
    justify-content: space-between;
  }

  .inputSpace {
    display: flex;
    padding-right: 16px;
  }

  .infoItem {
    margin-right: 9px;
    border-radius: 40px;
    border: 1px solid rgba(245, 146, 86, 0.5);
    width: 159px;
    /* display: flex; */
    /* justify-content: space-between; */
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
  }

  .buttItem {
    border: none;
    width: 0;
    background-color: inherit;
  }
`;
