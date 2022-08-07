import React, { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink to="/events">events</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
