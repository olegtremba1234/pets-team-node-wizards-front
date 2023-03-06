import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import { HeaderEl, HeaderContainer } from './Header.styled';

export default function Header() {
  return (
    <HeaderEl>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </HeaderEl>
  );
}
