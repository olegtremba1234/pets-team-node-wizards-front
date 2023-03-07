// import AuthNav from 'components/AuthNav/AuthNav';
import Logo from 'components/Logo';
import Nav from 'components/Nav';
import { HeaderEl } from './Header.styled';

export default function Header() {
  return (
    <HeaderEl>
      <Logo />
      <nav>
        {/* <Nav /> */}
        {/* <AuthNav /> */}
      </nav>
    </HeaderEl>
  );
}
