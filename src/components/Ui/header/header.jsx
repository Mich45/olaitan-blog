import React, { createContext, useState, useEffect, useContext } from 'react';
import { Button } from '../../styles';
import classes from './header.module.css';
import logo from '../../assets/images/logo.svg';
import { NavBar } from '../../constants/Nav';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from '../../assets/images/icon-menu.svg';
import closeNav from '../../assets/images/icon-close-menu.svg';
import { UserContentApi } from '../../contextApi/ContextApi';

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth);
  const location = useLocation();

  const toggler = () => {
    setMobile(!mobile);
  };
  useEffect(() => {
    const setDesktopWidth = () => {
      setDesktop(window.innerWidth);
    };
    window.addEventListener('resize', setDesktopWidth);
  });
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={classes.mobileContainer} onClick={toggler}>
          {mobile ? (
            <img src={closeNav} alt="" />
          ) : (
            <img src={Hamburger} alt="" />
          )}
        </div>
        {(mobile || desktop > 850) && (
          <nav className={classes.nav}>
            <ul onClick={toggler}>
              {NavBar.map((nav) => {
                return (
                  <Link
                    to={nav.to} >
                    <li className={
                      location.pathname === `${nav.to}`
                        ? classes.active
                        : classes.notActive
                    }>{nav.name}</li>
                  </Link>
                );
              })}
            </ul>

            <div className={classes.btnContainer} onClick={toggler}>
              <Link>sign in</Link>
              <Link>{<Button>Sign up</Button>}</Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
