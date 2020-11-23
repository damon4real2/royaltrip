import React from 'react';

import { slide as Menu } from 'react-burger-menu';
import './css/Sidebar.css'
export default props => {
  return (
    <Menu className="SidebarMenu">
        {/* <Link to="/">
          <img className="sidebar-image" src={logo} alt="Royal Crystal Airways" />
        </Link> */}
      <a className="menu-item" href="/driver">
        Find a driver
      </a>
      <a className="menu-item" href="/rider">
      Why join us?
      </a>
      <a className="menu-item" href="/driver">
        Help centre
      </a>
    </Menu>
  );
};