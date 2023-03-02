import { useState } from 'react';
import accountImage from '../../icons/account.svg';
import { StyledLink } from './AuthNav.styled';

export default function AuthNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ul>
      {isLoggedIn ? (
        <li>
          <StyledLink to="/user">
            <img src={accountImage} alt="acc" />
            Account
          </StyledLink>
        </li>
      ) : (
        <>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
          <li>
            <StyledLink to="/register">Registration</StyledLink>
          </li>
        </>
      )}
      <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        togle login
      </button>
    </ul>
  );
}
