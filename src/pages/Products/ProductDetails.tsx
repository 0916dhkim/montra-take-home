import classes from "./ProductDetails.module.css";
import { useAppSelector } from "../../store/store";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useAppSelector((state) => {
    const found = state.products.find((each) => each.id.toString() === id);
    if (found == null) {
      throw new Error("Cannot find product.");
    }
    return found;
  });

  return (
    <div className={classes.detailsGrid}>
      <div className={classes.detailsLeft}>
        <p>Title: {product.title}</p>
        <p>Author: {product.author}</p>
        <p>Description: {product.description}</p>
      </div>
      <div className={classes.detailsRight}>
        <img src={product.thumbnail} className={classes.productImage} />
        <p>Price: ${product.price}</p>
        <p>
          Quantity: <input className={classes.quantityInput} />
        </p>
        <button className={classes.addButton}>Add to Cart</button>
      </div>
    </div>
  );
}
