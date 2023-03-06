import {
  HeroTitle,
  HeroWrapper,
  HeroImg,
  StyledContainer,
} from './Hero.styled';

import mainImg from '../../images/hero-images/standart.png';

export const Hero = () => {
  return (
    <StyledContainer>
      <HeroWrapper>
        <HeroTitle>Take good care of your small pets</HeroTitle>
        <HeroImg
          srcset="../../images/hero-images/standart.png 1x, ../../images/hero-images/retina.png 2x"
          src={mainImg}
          alt="Portrait of good looking, cheerful african american woman enjoys company of small pedigree dog wears."
        />
      </HeroWrapper>
    </StyledContainer>
  );
};
