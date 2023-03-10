import {
  StyledLink,
  AccountLink,
  Ul,
  LoginStyledLink,
  AccountIcon,
} from './AuthNav.styled';
import { useLocation } from 'react-router-dom';
import { isLocationRegister } from 'helpers/getLocationPathname';
import { useSelector } from 'react-redux';
export default function AuthNav({ closeMobile }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();
  const isLocationReg = isLocationRegister(location);

  return (
    <Ul>
      {isLoggedIn ? (
        <li>
          <AccountLink to="/user" onClick={() => closeMobile(false)}>
            <AccountIcon />
            <div>Account</div>
          </AccountLink>
        </li>
      ) : (
        <>
          <li>
            <LoginStyledLink
              to="/login"
              onClick={() => closeMobile(false)}
              mode={
                isLocationReg
                  ? {
                      color: '#111111',
                      backgroundColor: '#ffffff',
                      hover: '#f59256',
                    }
                  : {
                      color: '#ffffff',
                      backgroundColor: '#f59256',
                      hover: '#FF6101',
                    }
              }
            >
              Login
            </LoginStyledLink>
          </li>
          <li>
            <StyledLink to="/register" onClick={() => closeMobile(false)}>
              Registration
            </StyledLink>
          </li>
        </>
      )}
    </Ul>
  );
}
