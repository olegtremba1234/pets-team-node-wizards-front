import Logo from 'components/Logo';
import { DivMobile, Button } from './MobileMenu.styled';

export default function MobileMenu({ closeMobile, children }) {
  return (
    <DivMobile>
      <Logo />
      <Button type="button" onClick={() => closeMobile(false)}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 10L10 30"
            stroke="#212121"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 10L30 30"
            stroke="#212121"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      {children}
    </DivMobile>
  );
}
