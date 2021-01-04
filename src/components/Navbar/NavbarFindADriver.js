// import React, { useState } from 'react';
// import logo from './logo.svg';
// import {Link} from 'react-router-dom';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from 'reactstrap';
// import "./Navbar.css";

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div className="NavbarLogIn">
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">
//         <Link to="/">
//           <img className="img1" src={logo} alt="Royal Crystal Airways" />
//         </Link>
//         </NavbarBrand>
//         <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/FindADriver">Find a driver</NavLink>
//             </NavItem>
//         </Nav>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/ContactUs">Why Join Us?</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/">Help Centre</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;







import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/images/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/menu.svg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "../css/Navbar.css";

const NavbarWhyJoinUs = () => {
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
        <li className="option c" onClick={closeMobileMenu}>
            <a href="/FindADriver">Find a Driver</a>
          </li>

          <li className="option a" onClick={closeMobileMenu}>
            <a href="/WhyJoinUs">Why Join Us?</a>
          </li>
          <li className="option a" onClick={closeMobileMenu}>
            <a href="/">Help Centre</a>
          </li>
          

          {/* </div> */}

          {/* <li className="option" onClick={closeMobileMenu}>
            <a href="/">log in</a>
          </li> */}
          {/* <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="https://forms.gle/uHkPzawq51gFprtA9" className="sign-up_">
              sign up
            </a>
          </li> */}
        </ul>
      </div>
      <ul className="signin-up">
        {/* <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">log in</a>
        </li> */}
        {/* <li onClick={closeMobileMenu}>
          <a href="https://forms.gle/uHkPzawq51gFprtA9" className="signup-btn">
            sign up
          </a>
        </li> */}
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

export default NavbarWhyJoinUs;