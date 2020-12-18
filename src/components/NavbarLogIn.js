import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./css/Navbar.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavbarLogIn">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
        <Link to="/">
          <img className="img1" src={logo} alt="Royal Crystal Airways" />
        </Link>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Driver">Driver</NavLink>
            </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Rider</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://forms.gle/uHkPzawq51gFprtA9">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;