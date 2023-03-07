import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Container, StyledNavLink } from './Categories.styled';

const Categories = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Container>
      <StyledNavLink to={`lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink to={`in-good-hands`}>in good hands</StyledNavLink>
      <StyledNavLink to={`sell`}>sell</StyledNavLink>
      <StyledNavLink to={`favorite-ads`}>favorite ads</StyledNavLink>
      <StyledNavLink to={`my-ads`}>my ads</StyledNavLink>
    </Container>
  ) : (
    <Container>
      <StyledNavLink to={`lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink to={`in-good-hands`}>in good hands</StyledNavLink>
      <StyledNavLink to={`sell`}>sell</StyledNavLink>
    </Container>
  );
};
export default Categories;
