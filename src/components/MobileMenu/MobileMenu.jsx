import LogoNotClicable from 'components/Logo/LogoNotClicable';
import {
  DivMobile,
  Button,
  CloseIcon,
  Wrapper,
  ModalContainer,
} from './MobileMenu.styled';

export default function MobileMenu({ closeMobile, children }) {
  return (
    <DivMobile>
      <ModalContainer>
        <Wrapper>
          <LogoNotClicable />
          <Button type="button" onClick={() => closeMobile(false)}>
            <CloseIcon />
          </Button>
        </Wrapper>
        {children}
      </ModalContainer>
    </DivMobile>
  );
}
