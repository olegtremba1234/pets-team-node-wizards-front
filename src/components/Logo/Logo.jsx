import { StyledLink, Span } from './Logo.styled';
export default function Logo({ closeMobile }) {
  return (
    <StyledLink to="/" onClick={() => closeMobile(false)}>
      pe<Span>t</Span>ly
    </StyledLink>
  );
}
