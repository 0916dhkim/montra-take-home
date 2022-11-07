import ProductThumbnail from "./ProductThumbnail";
import classes from "./Products.module.css";

export default function Products() {
  return (
    <div className={classes.thumbnailGrid}>
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
    </div>
  );
}
