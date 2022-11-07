import classes from "./CartItem.module.css";

export default function CartItem() {
  return (
    <div className={classes.cartItem}>
      <div className={classes.thumbnail} />
      <div className={classes.itemDetails}>
        <span className={classes.title}>Book Title</span>
        <p className={classes.description}>
          Text text text text Text text text text Text text text text Text text
          text text Text text text text Text text text text Text text text text
          Text text text text Text text text text Text text text text Text text
          text text
        </p>
      </div>
      <div className={classes.orderDetails}>
        <span>Price: $00000</span>
        <span>Quantity: 1</span>
      </div>
      <button className={classes.close}>X</button>
    </div>
  );
}
