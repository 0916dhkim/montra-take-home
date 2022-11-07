import { NavLink } from "react-router-dom";
import classes from "./ProductThumbnail.module.css";

export default function ProductThumbnail() {
  return (
    <NavLink className={classes.thumbnailContainer} to="123">
      <div className={classes.thumbnail}></div>
    </NavLink>
  );
}
