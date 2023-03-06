import styled from 'styled-components';
import { device } from 'vars/device';

export const NewsWrap = styled.section`
  padding-top: 45px;
  padding-bottom: 100px;
  background: ${p => p.theme.backgrounds.bodyPrimary};

  @media ${device.tablet} {
    padding-top: 95px;
  }

  @media  ${device.desktop} {
    padding-top: 60px;
    padding-bottom: 200px;
  }

`;

export const StyledContainer = styled.div`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;


  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
  }
  @media ${device.desktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  color: ${p => p.theme.fontColors.primary};
  margin: 0 auto;
  text-align: center;

  @media ${device.tablet} {
    font-size: 48px;
  }
`;


export const NewsList = styled.ul`
  margin-top: 40px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 60px;
    margin-top: 60px;
  }

  @media ${device.desktop} {
    grid-column-gap: 34px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NewsItem = styled.li`
@media ${device.preTablet} {
  :not(:last-child) {
  margin-bottom: 40px;
}
}

::before {
  content: '';
  display: block;
  width: 200px;
  height: 4px;
  margin-bottom: 4px;

  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;

  @media ${device.tablet} {
    width: 280px;
    height: 8px;

  }

  @media ${device.desktop} {
    width: 340px;
  }
`;

export const NewsTitle = styled.h3`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: ${p => p.theme.fontColors.primary};

  @media ${device.tablet} {
    height: 66px;
  }
`;

export const Description = styled.p`
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.4;
  color: #111321;
  margin-top: 16px;
  margin-bottom: 20px;


  @media ${device.tablet} {
    margin-bottom: 40px;
    height: 132px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.span`
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.4;
  color: ${p => p.theme.fontColors.inputTextColor};
  display: flex;
  justify-content: space-between;
`;

export const LinkReadMore = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-decoration-line: underline;
  color: ${p => p.theme.fontColors.buttonSecondary};

  &:hover {
    color: ${p => p.theme.hoverButtonColor.primary};
    transition: ${p => p.theme.transition.first}
  }
`;
