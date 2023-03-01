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
