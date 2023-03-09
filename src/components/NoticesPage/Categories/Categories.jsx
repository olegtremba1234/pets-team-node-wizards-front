import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Section, StyledNavLink } from './Categories.styled';

const Categories = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Section>
      <StyledNavLink to={`lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink to={`in-good-hands`}>in good hands</StyledNavLink>
      <StyledNavLink to={`sell`}>sell</StyledNavLink>
      <StyledNavLink to={`favorite-ads`}>favorite ads</StyledNavLink>
      <StyledNavLink to={`my-ads`}>my ads</StyledNavLink>
    </Section>
  ) : (
    <Section>
      <StyledNavLink to={`lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink to={`in-good-hands`}>in good hands</StyledNavLink>
      <StyledNavLink to={`sell`}>sell</StyledNavLink>
    </Section>
  );
};
export default Categories;
