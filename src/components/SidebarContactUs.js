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
      <a className="menu-item active-menu" href="/AboutUs">
        About our company
      </a>
      <a className="menu-item" href="/ContactUs">
        Why join us?
      </a>
      <a className="menu-item" href="/ContactUs">
        Contact us
      </a>
    </Menu>
  );
};