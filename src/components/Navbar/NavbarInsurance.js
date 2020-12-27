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
      <Navbar color="transparent" light expand="md">
        <NavbarBrand href="/">
        <Link to="/">
          <img className="img1" src={logo} alt="Royal Crystal Airways" />
        </Link>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink active href="/Insurance">Insurance</NavLink>
        </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar> 
          <NavItem>
            <NavLink href="/FleetOwners">Fleet Owners</NavLink>
          </NavItem>  
          <NavItem>
            <NavLink href="/Business">Business</NavLink>
          </NavItem>         
          <NavItem>
              <NavLink href="/Driver">Driver</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Rider">Rider</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Business">Log In</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarWhyJoinUs;