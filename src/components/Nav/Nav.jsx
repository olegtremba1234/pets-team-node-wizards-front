import { Ul, StyledLink } from './Nav.styled';
<<<<<<< HEAD
export default function Nav() {
=======

export default function Nav({ closeMobile }) {
>>>>>>> 5e5601637964455dc29373640b78fca9a58bcf8d
  return (
    <Ul>
      <li>
        <StyledLink to="/news" onClick={() => closeMobile(false)}>
          News
        </StyledLink>
      </li>
      <li>
<<<<<<< HEAD
        <StyledLink to="/notices/all">Find pet</StyledLink>
=======
        <StyledLink to="/notices" onClick={() => closeMobile(false)}>
          Find pet
        </StyledLink>
>>>>>>> 5e5601637964455dc29373640b78fca9a58bcf8d
      </li>
      <li>
        <StyledLink to="/friends" onClick={() => closeMobile(false)}>
          Our friends
        </StyledLink>
      </li>
    </Ul>
  );
}
