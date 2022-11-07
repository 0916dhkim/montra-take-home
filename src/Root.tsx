import { NavLink, Outlet } from "react-router-dom";

import classes from "./Root.module.css";

export default function Root() {
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <ul className={classes.navGroup}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.navLinkActive : classes.navLink
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.navLinkActive : classes.navLink
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.navLinkActive : classes.navLink
            }
            to="/cart"
          >
            Cart
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
