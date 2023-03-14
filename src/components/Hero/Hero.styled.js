import styled from 'styled-components';
import { device } from 'vars/device';
import { theme } from 'vars/theme';

import mainBgImgMobile from '../../images/hero-images/vectors/vector-mobile.svg';
import mainBgImgTablet from '../../images/hero-images/vectors/vector-tablet.svg';
import mainBgImgDesktop from '../../images/hero-images/vectors/vector-desktop.svg';

import secondaryImage from '../../images/hero-images/standart.png';

export const StyledContainer = styled.main`
  background-color: ${theme.backgrounds.bodyPrimary};
  background-image: url(${secondaryImage}), url(${mainBgImgMobile});
  background-size: 320px 327px, 100% 470px;
  background-repeat: no-repeat;
  background-position: bottom center, right 0% bottom 0%;
  min-height: 601px;
  @media ${device.tablet} {
    background-image: url(${secondaryImage}), url(${mainBgImgTablet});
    background-size: 645px 715px, 100% 1098px;
    background-position: bottom center;
    min-height: 1190px;
  }
  @media ${device.desktop} {
    min-height: 769px;
    background-image: url(${secondaryImage}), url(${mainBgImgDesktop});
    background-size: 590px 640px, 100% 538px;
    background-position: bottom right;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  height: 90vh;

  width: 320px;
  padding: 0 20px;

  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
    margin: 0 auto;
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
    left: 52%;
    width: 90px;
  }
`;

export const HeroTitle = styled.h1`
  padding-top: 60px;
  color: ${theme.fontColors.secondary};
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  @media ${device.tablet} {
    padding-top: 88px;

    font-size: 68px;
    line-height: 100px;
  }
  @media ${device.desktop} {
    margin-top: 0px;
    padding-top: 90px;
    width: 588px;
  }
`;
