import { Ul, StyledLink } from './Nav.styled';
export default function Nav() {
  return (
    <Ul>
      <li>
        <StyledLink to="/news">News</StyledLink>
      </li>
      <li>
        <StyledLink to="/notices/all">Find pet</StyledLink>
      </li>
      <li>
        <StyledLink to="/friends">Our friends</StyledLink>
      </li>
    </Ul>
  );
}
