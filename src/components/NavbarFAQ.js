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
import "./css/NavbarFAQ.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
        <Link to="/">
          <img className="img1" src={logo} alt="Royal Crystal Airways" />
        </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar nav-fill>
            <NavItem>
              <NavLink href="/FindADriver">Find a driver</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/WhyJoinUs">Why join us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/HelpCenter">Help center</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;