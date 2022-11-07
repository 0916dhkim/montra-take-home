import classes from "./ProductDetails.module.css";

export default function ProductDetails() {
  return (
    <div className={classes.detailsGrid}>
      <div className={classes.detailsLeft}>
        <p>Title:</p>
        <p>Author:</p>
        <p>Description:</p>
      </div>
      <div className={classes.detailsRight}>
        <div className={classes.productImage} />
        <p>Price: $000000</p>
        <p>
          Quantity: <input className={classes.quantityInput} />
        </p>
        <button className={classes.addButton}>Add to Cart</button>
      </div>
    </div>
  );
}
