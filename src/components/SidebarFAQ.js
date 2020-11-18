import React from 'react';

// import logo from '../assets/images/logo.svg';
// import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './css/Sidebar.css'
export default props => {
  return (
    <Menu className="SidebarMenu">
        {/* <Link to="/">
          <img className="sidebar-image" src={logo} alt="Royal Crystal Airways" />
        </Link> */}
      <a className="menu-item" href="/driver">
        Driver
      </a>
      <a className="menu-item" href="/rider">
        Rider
      </a>
      {/* <a className="menu-item" href="/driver">
        log in
      </a> */}
      <a className="menu-item" href="/driver">
        Sign up to ride
      </a>
      <a className="menu-item" href="/driver">
        Apply to drive
      </a>
    </Menu>
  );
};