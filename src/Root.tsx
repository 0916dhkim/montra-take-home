import { NavLink, Outlet } from "react-router-dom";

import classes from "./Root.module.css";

export default function Root() {
  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.navGroup}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
