import { NavLink } from "react-router-dom";
import classes from "./ProductThumbnail.module.css";

type ProductThumbnailProps = {
  src: string;
};

export default function ProductThumbnail({ src }: ProductThumbnailProps) {
  return (
    <NavLink className={classes.thumbnailContainer} to="123">
      <img src={src} className={classes.thumbnail} />
    </NavLink>
  );
}
