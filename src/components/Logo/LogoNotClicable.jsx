import { StyledP, Span } from './Logo.styled';
export default function LogoNotClicable() {
  return (
    <StyledP to="/">
      pe<Span>t</Span>ly
    </StyledP>
  );
}
