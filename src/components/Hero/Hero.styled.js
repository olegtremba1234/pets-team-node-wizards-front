import styled from 'styled-components';
import { device } from 'vars/device';
import { theme } from 'vars/theme';

import mainBgImgMobile from '../../images/hero-images/vectors/vector-mobile.svg';
import mainBgImgTablet from '../../images/hero-images/vectors/vector-tablet.svg';
import mainBgImgDesktop from '../../images/hero-images/vectors/vector-desktop.svg';

export const StyledContainer = styled.main`
  /* margin work with*/
  /* width: 100vh; */
  margin: 0 auto;
  background-color: ${theme.backgrounds.bodyPrimary};
  background-image: url(${mainBgImgMobile});
  background-size: 100% 470px;
  background-repeat: no-repeat;
  background-position: right 0% bottom 0%;

  @media ${device.tablet} {
    background-image: url(${mainBgImgTablet});
    background-size: 100% 1098px;
  }
  @media ${device.desktop} {
    position: fixed;
    bottom: 0;
    background-image: url(${mainBgImgDesktop});
    background-size: 100% 538px;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  height: 90vh;

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

export const HeroImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 320px;

  @media ${device.tablet} {
    width: 645px;
  }

  @media ${device.desktop} {
    bottom: 0;
    right: 0;
    width: 590px;
  }
`;

export const HeartSvg = styled.img`
  display: none;

  @media ${device.desktop} {
    display: block;
    position: absolute;
    top: 17%;
    left: 57%;
    width: 90px;
  }
`;

export const HeroTitle = styled.h1`
  margin-top: 60px;

  color: ${theme.fontColors.secondary};
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  @media ${device.tablet} {
    margin-top: 88px;

    font-size: 68px;
    line-height: 100px;
  }
  @media ${device.desktop} {
    margin-top: 0px;
    padding-top: 60px;
    width: 588px;
  }
`;
