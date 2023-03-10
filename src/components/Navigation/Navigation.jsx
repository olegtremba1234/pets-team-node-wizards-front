import AuthNav from 'components/AuthNav';
import MobileMenu from 'components/MobileMenu';
import Nav from 'components/Nav';
import { Fragment, useState } from 'react';
import { Button, NavEl } from './Navigation.styled';
import Media from 'react-media';
import { CSSTransition } from 'react-transition-group';
import BurgerMenu from '../../icons/burgerMenu.svg';

import './animationsClasses.css';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <nav>
                <CSSTransition
                  in={isMobileMenuOpen}
                  classNames="fade"
                  timeout={500}
                  unmountOnExit
                >
                  <MobileMenu closeMobile={() => setIsMobileMenuOpen(false)}>
                    <AuthNav closeMobile={() => setIsMobileMenuOpen(false)} />
                    <Nav closeMobile={() => setIsMobileMenuOpen(false)} />
                  </MobileMenu>
                </CSSTransition>
                <Button type="button" onClick={() => setIsMobileMenuOpen(true)}>
                  <img src={BurgerMenu} alt="Burger menu" />
                </Button>
              </nav>
            )}
            {matches.medium && (
              <NavEl>
                <AuthNav closeMobile={() => setIsMobileMenuOpen(false)} />
                <CSSTransition
                  in={isMobileMenuOpen}
                  classNames="fade"
                  timeout={500}
                  unmountOnExit
                >
                  <MobileMenu closeMobile={() => setIsMobileMenuOpen(false)}>
                    <Nav closeMobile={() => setIsMobileMenuOpen(false)} />
                  </MobileMenu>
                </CSSTransition>
                <Button type="button" onClick={() => setIsMobileMenuOpen(true)}>
                  <img src={BurgerMenu} alt="Burger menu" />
                </Button>
              </NavEl>
            )}
            {matches.large && (
              <NavEl>
                <Nav closeMobile={() => setIsMobileMenuOpen(false)} />
                <AuthNav closeMobile={() => setIsMobileMenuOpen(false)} />
              </NavEl>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
}
