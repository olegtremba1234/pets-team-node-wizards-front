import {
  HeroTitle,
  HeroWrapper,
  HeroImg,
  StyledContainer,
  HeartSvg,
} from './Hero.styled';

import mainImg from '../../images/hero-images/standart.png';
import heartSvg from '../../images/hero-images/vectors/heart-svg-desctop.svg';

export const Hero = () => {
  return (
    <StyledContainer>
      <HeroWrapper>
        <HeroTitle>Take good care of your small pets</HeroTitle>
        <HeartSvg src={heartSvg} alt="Image of heart" />
        <HeroImg
          srcset="../../images/hero-images/standart.png 1x, ../../images/hero-images/retina.png 2x"
          src={mainImg}
          alt="Portrait of good looking, cheerful african american woman enjoys company of small pedigree dog wears."
        />
      </HeroWrapper>
    </StyledContainer>
  );
};
