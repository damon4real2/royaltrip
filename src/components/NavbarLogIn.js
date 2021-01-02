import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/images/x.svg";
import { ReactComponent as MenuIcon } from "../assets/images/menu.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import "./css/Navbar.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/Driver">driver</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/Rider">rider</a>
          </li>
          {/* <li className="option" onClick={closeMobileMenu}>
            <a href="/">log in</a>
          </li> */}
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="https://forms.gle/uHkPzawq51gFprtA9" className="sign-up_">
              sign up
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        {/* <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">log in</a>
        </li> */}
        <li onClick={closeMobileMenu}>
          <a href="https://forms.gle/uHkPzawq51gFprtA9" className="signup-btn">
            sign up
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
