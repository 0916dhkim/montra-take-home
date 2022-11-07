import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useAppSelector } from "../../store/store";
import { useMemo } from "react";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const total = useMemo(
    () =>
      cart.reduce(
        (prev, cartItem) => prev + cartItem.product.price * cartItem.quantity,
        0
      ),
    [cart]
  );

  return (
    <div className={classes.cart}>
      {cart.map((cartItem) => (
        <CartItem key={cartItem.product.id} item={cartItem} />
      ))}
      <hr />
      <div className={classes.total}>
        <span className={classes.totalLabel}>Total Price</span> ${total}
      </div>
    </div>
  );
}
