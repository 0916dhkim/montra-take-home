import CartItem from "./CartItem";
import classes from "./Cart.module.css";

export default function Cart() {
  return (
    <div className={classes.cart}>
      <CartItem />
      <CartItem />
      <hr />
      <div className={classes.total}>
        <span className={classes.totalLabel}>Total Price</span> $0000
      </div>
    </div>
  );
}
