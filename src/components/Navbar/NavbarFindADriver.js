import React, { useState } from 'react';
import logo from './logo.svg';
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
import "./Navbar.css";

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
              <NavLink href="/FindADriver">Find a driver</NavLink>
            </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/ContactUs">Why Join Us?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Help Centre</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;