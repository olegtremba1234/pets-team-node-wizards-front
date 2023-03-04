import styled from 'styled-components';

export const UserPage = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  background: #ebe2db;
  margin-top: 61px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding: 0;
    padding-right: 32px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyInfo = styled.h1`
  margin-bottom: 18px;
  width: 207px;
  height: 38px;
  left: 17px;
  top: 126px;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;

  @media screen and (min-width: 768px) {}

  @media screen and (min-width: 1280px) {
    margin: 0   0 24px 17px;
  }
`;
