import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Container, StyledNavLink } from './Categories.styled';

const Categories = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Container>
      <StyledNavLink to={`/notices/lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink to={`/notices/in-good-hands`}>in good hands</StyledNavLink>
      <StyledNavLink to={`/notices/sell`}>sell</StyledNavLink>
      <StyledNavLink to={`/notices/favorite-ads`}>favorite ads</StyledNavLink>
      <StyledNavLink to={`/notices/my-ads`}>my ads</StyledNavLink>
    </Container>
  ) : (
    <Container>
      <StyledNavLink to={`/notices/lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink to={`/notices/in-good-hands`}>in good hands</StyledNavLink>
      <StyledNavLink to={`/notices/sell`}>sell</StyledNavLink>
    </Container>
  );
};
export default Categories;
