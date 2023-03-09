import Logo from 'components/Logo';
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
          <Logo />
          <Button type="button" onClick={() => closeMobile(false)}>
            <CloseIcon />
          </Button>
        </Wrapper>
        {children}
      </ModalContainer>
    </DivMobile>
  );
}
