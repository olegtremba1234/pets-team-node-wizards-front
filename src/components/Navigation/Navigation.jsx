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
  const [isMobileMenuOpen, setIsMobileNenuOpen] = useState(false);

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
                {isMobileMenuOpen ? (
                  <CSSTransition
                    in={isMobileMenuOpen}
                    classNames="fade"
                    timeout={500}
                  >
                    <MobileMenu closeMobile={setIsMobileNenuOpen}>
                      <AuthNav closeMobile={setIsMobileNenuOpen} />
                      <Nav closeMobile={setIsMobileNenuOpen} />
                    </MobileMenu>
                  </CSSTransition>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setIsMobileNenuOpen(true)}
                  >
                    <img src={BurgerMenu} alt="Burger menu" />
                  </Button>
                )}
              </nav>
            )}
            {matches.medium && (
              <NavEl>
                <AuthNav closeMobile={setIsMobileNenuOpen} />
                {isMobileMenuOpen ? (
                  <CSSTransition
                    in={isMobileMenuOpen}
                    classNames="fade"
                    timeout={500}
                  >
                    <MobileMenu closeMobile={setIsMobileNenuOpen}>
                      <Nav closeMobile={setIsMobileNenuOpen} />
                    </MobileMenu>
                  </CSSTransition>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setIsMobileNenuOpen(true)}
                  >
                    <img src={BurgerMenu} alt="Burger menu" />
                  </Button>
                )}
              </NavEl>
            )}
            {matches.large && (
              <NavEl>
                <Nav closeMobile={setIsMobileNenuOpen} />
                <AuthNav closeMobile={setIsMobileNenuOpen} />
              </NavEl>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
}
