import styled from 'styled-components';

export const StyledContainer = styled.section`
  max-width: 480px;
  padding: 42px 20px 100px 20px;
  background: #FDF7F2;

  @media screen and (min-width: 481px) {
    max-width: 768px;
    padding: 90px 32px 100px 32px;
  }
  @media screen and (min-width: 769px) {
    max-width: 1280px;
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
  padding: 0;
  text-align: center;

  @media screen and (min-width: 481px) {
    font-size: 48px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 28px 0 40px 0;
  max-width: 280px;

  @media screen and (min-width: 481px) {
    padding: 40px 80px 60px 80px;
    max-width: 608px;
  }
`;

export const Input = styled.input`
  height: 40px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border: none;
  padding: 0 9px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: #535353;

  @media screen and (min-width: 481px) {
    font-size: 20px;
    height: 44px;
    border-radius: 40px;
    padding: 0 20px;
  }
`;

export const ListItem = styled.li`
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
`;

export const ArticleTitle = styled.h3`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 1.4;
letter-spacing: -0.02em;
color: #111111;
margin: 0;
padding: 0;
`;


export const Description = styled.p`
font-family: 'Manrope';
font-weight: 400;
font-size: 16px;
line-height: 1.4;
color: #111321;
padding: 0;
margin-bottom: 20px;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`;


export const Date = styled.span`
font-family: 'Manrope';
font-weight: 400;
font-size: 16px;
line-height: 1.4;
color: rgba(17, 17, 17, 0.6);
margin: 0;
padding: 0;
display: flex;
justify-content: space-between;
`;


export const LinkReadMore = styled.a`
font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-decoration-line: underline;
  color: #F59256;

  &:hover {
    color: #f4823e;
  }
`;




