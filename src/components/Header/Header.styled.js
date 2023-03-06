import styled from 'styled-components';

export const HeaderEl = styled.header`
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  justify-content: space-between;
  padding: 16px 20px;
  padding-bottom: 0;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 24px 32px;
    padding-bottom: 0;
    width: 768px;
  }
  @media (min-width: 1280px) {
    padding: 16px 20px;
    padding-bottom: 0;
    gap: 80px;
    justify-content: flex-start;
    width: 1280px;
  }
`;
