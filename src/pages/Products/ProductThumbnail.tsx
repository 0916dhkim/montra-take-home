import { NavLink } from "react-router-dom";
import classes from "./ProductThumbnail.module.css";

type ProductThumbnailProps = {
  productId: number;
  src: string;
};

export default function ProductThumbnail({
  productId,
  src,
}: ProductThumbnailProps) {
  return (
    <NavLink className={classes.thumbnailContainer} to={productId.toString()}>
      <img src={src} className={classes.thumbnail} />
    </NavLink>
  );
}
