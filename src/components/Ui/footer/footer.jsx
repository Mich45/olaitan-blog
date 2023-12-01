import React, { useContext } from 'react';
import classes from './footer.module.css';
import Footericon from '../../assets/images/footerimage.svg'
import { Link } from 'react-router-dom';

import {
  footerMenu1,
  footerMenu2,
  footerMenu3,
  footerMenu4,
} from '../../constants/Nav';
import { UserContentApi } from '../../contextApi/ContextApi';
export default function Footer() {
  const { currentYear } = useContext(UserContentApi);

  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.main}>
          <div className={classes.griddy}>
            <div className={classes.footerImg}>
              <img src={Footericon} alt="" />
            </div>
            <Link className={classes.visit}>
              <button>Visit our website</button>
            </Link>
          </div>
          <div className={classes.gridMenu}>

            <div className={classes.gridItems}>
              {footerMenu1.map((menu) => {
                return (
                  <ul>
                    <legend>{menu.heading}</legend>
                    <li>{menu.link}</li>
                  </ul>
                );
              })}
            </div>
            <div className={classes.gridItems}>
              {footerMenu2.map((menu) => {
                return (
                  <ul>
                    <legend>{menu.heading}</legend>
                    <li>{menu.link}</li>
                  </ul>
                );
              })}
            </div>
            <div className={classes.gridItems}>
              {footerMenu3.map((menu) => {
                return (
                  <ul>
                    <legend>{menu.heading}</legend>
                    <li>{menu.link}</li>
                  </ul>
                );
              })}
            </div>
            <div className={classes.gridItems}>
              {footerMenu4.map((menu) => {
                return (
                  <ul>
                    <legend>{menu.heading}</legend>
                    <li>{menu.link}</li>

                    <div className={classes.socialIconContainer}>
                      <div className={classes.socialIcon}>
                        <img src={menu.facebook} alt="" />
                      </div>
                      <div className={classes.socialIcon}>
                        <img src={menu.Twitter} alt="" />
                      </div>
                      <div className={classes.socialIcon}>
                        <img src={menu.Instagram} alt="" />
                      </div>
                    </div>
                  </ul>
                );
              })}
            </div>
          </div>
    
        </div>
        <hr />
        <p className={classes.year}>©{currentYear} Duwitt Academy. All Rights Reserved.</p>
      </footer>
    </>
  );
}
