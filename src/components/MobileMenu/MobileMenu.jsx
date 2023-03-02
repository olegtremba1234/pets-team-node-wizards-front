import Logo from 'components/Logo';

export default function MobileMenu({ children }) {
  return (
    <div>
      <Logo />
      <button type="button">x</button>
      {children}
    </div>
  );
}
