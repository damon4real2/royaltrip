import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/Sidebar.css'
export default props => {
  return (
    <Menu className="SidebarMenu">
      <a className="menu-item active-menu" href="/">
        about our company
      </a>
      <a className="menu-item" href="/salads">
        why join us
      </a>
      <a className="menu-item" href="/pizzas">
        contact us
      </a>
    </Menu>
  );
};