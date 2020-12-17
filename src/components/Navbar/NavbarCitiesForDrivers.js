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

const NavbarWhyJoinUs = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavbarWhyJoinUs">
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
            <NavItem>
              <NavLink active href="/CitiesForDrivers">Cities</NavLink>
            </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Riders">Rider</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Business">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/FleetOwners">Fleet Owners</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarWhyJoinUs;