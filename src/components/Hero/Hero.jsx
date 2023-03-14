import {
  HeroTitle,
  HeroWrapper,
  StyledContainer,
  HeartSvg,
} from './Hero.styled';

import heartSvg from '../../images/hero-images/vectors/heart-svg-desctop.svg';

export const Hero = () => {
  return (
    <StyledContainer>
      <HeroWrapper>
        <HeroTitle>Take good care of your small pets</HeroTitle>
        <HeartSvg src={heartSvg} alt="Image of heart" />
      </HeroWrapper>
    </StyledContainer>
  );
};
