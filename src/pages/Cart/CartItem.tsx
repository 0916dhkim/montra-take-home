import { CartItem as CartItemType, deleteItem } from "../../store/cart";

import { NavLink } from "react-router-dom";
import classes from "./CartItem.module.css";
import { useAppDispatch } from "../../store/store";

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.cartItem}>
      <NavLink to={`/products/${item.product.id}`}>
        <img className={classes.thumbnail} src={item.product.thumbnail} />
      </NavLink>
      <div className={classes.itemDetails}>
        <span className={classes.title}>{item.product.title}</span>
        <p className={classes.description}>{item.product.description}</p>
      </div>
      <div className={classes.orderDetails}>
        <span>Price: ${item.product.price}</span>
        <span>Quantity: {item.quantity}</span>
      </div>
      <button
        className={classes.close}
        onClick={() => dispatch(deleteItem(item.product.id))}
      >
        X
      </button>
    </div>
  );
}
