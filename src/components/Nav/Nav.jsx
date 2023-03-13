import { useParams } from 'react-router-dom';
import { Ul, StyledLink } from './Nav.styled';

export default function Nav({ closeMobile }) {
  return (
    <>
      <Ul>
        <li>
          <StyledLink to="/news" onClick={() => closeMobile(false)}>
            News
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/notices/sell" onClick={() => closeMobile(false)}>
            Find pet
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/friends" onClick={() => closeMobile(false)}>
            Our friends
          </StyledLink>
        </li>
      </Ul>
    </>
  );
}
