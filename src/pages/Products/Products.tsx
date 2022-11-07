import ProductThumbnail from "./ProductThumbnail";
import classes from "./Products.module.css";
import { useAppSelector } from "../../store/store";

export default function Products() {
  const products = useAppSelector((state) => state.products);

  return (
    <div className={classes.thumbnailGrid}>
      {products.map((product) => (
        <ProductThumbnail
          key={product.id}
          productId={product.id}
          src={product.thumbnail}
        />
      ))}
    </div>
  );
}
