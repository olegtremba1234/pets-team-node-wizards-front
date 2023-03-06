import styled from 'styled-components';
import { device } from 'vars/device';
import { theme } from 'vars/theme';

import mainBgImgMobile from '../../images/hero-images/vectors/vector-mobile.svg';
import mainBgImgTablet from '../../images/hero-images/vectors/vector-tablet.svg';
import mainBgImgDesktop from '../../images/hero-images/vectors/vector-desktop.svg';

export const StyledContainer = styled.main`
  box-sizing: content-box;
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

export const HeroWrapper = styled.div`
  /* position: fixed;
  bottom: 0; */
  background-color: ${theme.backgrounds.bodyPrimary};

  @media ${device.desktop} {
    display: flex;
  }
`;

export const HeroImg = styled.img`
  display: block;
  width: 320px;
  height: auto;

  @media ${device.tablet} {
    width: 645px;
  }

  @media ${device.desktop} {
    width: 590px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 60px;

  color: ${theme.fontColors.secondary};
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  @media ${device.tablet} {
    margin-bottom: 120px;

    font-size: 68px;
    line-height: 100px;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
    margin-top: 60px;
  }
`;
