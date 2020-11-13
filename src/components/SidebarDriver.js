import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/Sidebar.css'
export default props => {
  return (
    <Menu className="SidebarMenu">
      <a className="menu-item active-menu" href="/">
        driver
      </a>
      <a className="menu-item" href="/salads">
        rider
      </a>
      <a className="menu-item" href="/pizzas">
        log in
      </a>
      <a className="menu-item" href="/pizzas">
        sign up
      </a>
    </Menu>
  );
};