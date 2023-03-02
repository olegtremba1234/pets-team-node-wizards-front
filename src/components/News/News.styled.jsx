import styled from 'styled-components';

export const StyledContainer = styled.section`
  max-width: 480px;
  padding: 42px 20px 100px 20px;
  margin: 0 auto;
  background: #fdf7f2;

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
  align-items: center;
  justify-content: center;
  margin-bottom: 40px


  @media screen and (min-width: 481px) {
    margin-bottom: 60px;

  }
`;

export const Label = styled.label`
position: relative;
`;

export const Input = styled.input`
  width: 280px;
  height: 40px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border: none;
  padding: 0 9px;
  font-family: 'Inter';
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

export const SearchBtn = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
position: absolute;
right: 24px;
top: 29%;

`;


export const NewsList = styled.ul`
  margin-top: 40px;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 481px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 34px;
    grid-row-gap: 60px;
  }

  @media screen and (min-width: 769px) {

  }
`;

export const NewsItem = styled.li`
margin: 0;
padding: 0;
list-style: none;
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
  margin: 0;
  padding: 0;
`;

export const Description = styled.p`
  font-family: 'Manrope';
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
  color: #f59256;

  &:hover {
    color: #f4823e;
  }
`;
