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
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import "./css/Navbar.css";;

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
        <Link to="/Home">
          <img className="img1" src={logo} alt="Royal Crystal Airways" />
        </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Driver">Driver</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Rider">Rider</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logIn">Log In</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sign Up
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Sign up to ride
                </DropdownItem>
                <DropdownItem>
                  Apply to drive
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;