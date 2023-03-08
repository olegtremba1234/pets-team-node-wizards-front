import AuthNav from 'components/AuthNav';
import MobileMenu from 'components/MobileMenu';
import Nav from 'components/Nav';
import { Fragment, useState } from 'react';
import { Button, NavEl } from './Navigation.styled';
import Media from 'react-media';
import { CSSTransition } from 'react-transition-group';

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
                    <svg
                      width="30"
                      height="20"
                      viewBox="0 0 30 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 18.3333C0 19.2538 0.746192 20 1.66667 20H28.3333C29.2538 20 30 19.2538 30 18.3333C30 17.4129 29.2538 16.6667 28.3333 16.6667H1.66667C0.746193 16.6667 0 17.4129 0 18.3333ZM0 10C0 10.9205 0.746192 11.6667 1.66667 11.6667H28.3333C29.2538 11.6667 30 10.9205 30 10C30 9.07952 29.2538 8.33333 28.3333 8.33333H1.66667C0.746193 8.33333 0 9.07952 0 10ZM1.66667 0C0.746193 0 0 0.746192 0 1.66667C0 2.58714 0.746192 3.33333 1.66667 3.33333H28.3333C29.2538 3.33333 30 2.58714 30 1.66667C30 0.746192 29.2538 0 28.3333 0H1.66667Z"
                        fill="#111111"
                      />
                    </svg>
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
                    <svg
                      width="30"
                      height="20"
                      viewBox="0 0 30 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 18.3333C0 19.2538 0.746192 20 1.66667 20H28.3333C29.2538 20 30 19.2538 30 18.3333C30 17.4129 29.2538 16.6667 28.3333 16.6667H1.66667C0.746193 16.6667 0 17.4129 0 18.3333ZM0 10C0 10.9205 0.746192 11.6667 1.66667 11.6667H28.3333C29.2538 11.6667 30 10.9205 30 10C30 9.07952 29.2538 8.33333 28.3333 8.33333H1.66667C0.746193 8.33333 0 9.07952 0 10ZM1.66667 0C0.746193 0 0 0.746192 0 1.66667C0 2.58714 0.746192 3.33333 1.66667 3.33333H28.3333C29.2538 3.33333 30 2.58714 30 1.66667C30 0.746192 29.2538 0 28.3333 0H1.66667Z"
                        fill="#111111"
                      />
                    </svg>
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
