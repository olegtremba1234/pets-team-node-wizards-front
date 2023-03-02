import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 480px;
  padding: 42px 20px 100px 20px;
  margin: 0 auto;
  background: #fdf7f2;

  @media screen and (min-width: 481px) {
    width: 768px;
    padding: 90px 32px 100px 32px;
  }
  @media screen and (min-width: 769px) {
    width: 1280px;
    padding: 60px 16px 200px 16px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  color: #111111;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 481px) {
    font-size: 48px;
  }
`;


export const NewsList = styled.ul`
  margin-top: 40px;

  @media screen and (min-width: 481px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 34px;
    grid-row-gap: 60px;
  }

  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NewsItem = styled.li`
:not(:last-child) {
  margin-bottom: 40px;
}

::before {
  content: '';
  display: block;
  width: 200px;
  height: 4px;
  margin-bottom: 4px;

  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;

  @media screen and (min-width: 481px) {
    width: 280px;
    height: 8px;

  }

  @media screen and (min-width: 769px) {
    width: 340px;
  }
`;

export const NewsTitle = styled.h3`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: #111111;
`;

export const Description = styled.p`
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.4;
  color: #111321;
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.span`
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.4;
  color: rgba(17, 17, 17, 0.6);
  display: flex;
  justify-content: space-between;
`;

export const LinkReadMore = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-decoration-line: underline;
  color: #f59256;

  &:hover {
    color: #f4823e;
  }
`;
