import React from 'react';

// import logo from '../assets/images/logo.svg';
// import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
export default props => {
  return (
    <Menu className="SidebarMenu">
    {/* <Link to="/">
        <img className="sidebar-image" src={logo} alt="Royal Crystal Airways" />
    </Link> */}
    <a className="menu-item active-menu" href="/FindADriver">
      Find a driver
    </a>
    <a className="menu-item" href="/WhyJoinUs">
    Why Join Us?
    </a>
    <a className="menu-item" href="/">
      Help Center
    </a>
    </Menu>
  );
};

