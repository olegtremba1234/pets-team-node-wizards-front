import styled from 'styled-components';

export const NoticeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
