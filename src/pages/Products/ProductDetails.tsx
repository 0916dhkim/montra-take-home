import { ChangeEventHandler, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";

import { addToCart } from "../../store/cart";
import classes from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => {
    const found = state.products.find((each) => each.id.toString() === id);
    if (found == null) {
      throw new Error("Cannot find product.");
    }
    return found;
  });

  const [quantityInput, setQuantityInput] = useState("1");
  const [error, setError] = useState<string | null>(null);

  const validateQuantity = (): number | null => {
    const value = Number(quantityInput);
    if (isNaN(value)) {
      setError("Invalid quantity.");
      return null;
    }
    if (value <= 0) {
      setError("Quantity should be greater than 0.");
      return null;
    }
    setError(null);
    return value;
  };

  useEffect(() => {
    validateQuantity();
  }, [quantityInput]);

  const handleQuantityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuantityInput(e.target.value);
  };

  const handleAdd = () => {
    const quantity = validateQuantity();
    if (quantity) {
      dispatch(addToCart({ product, quantity }));
      navigate("/cart");
    }
  };

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
          Quantity:{" "}
          <input
            className={classes.quantityInput}
            value={quantityInput}
            onChange={handleQuantityChange}
          />
        </p>
        {error ? <p className={classes.errorLabel}>{error}</p> : null}
        <button className={classes.addButton} onClick={() => handleAdd()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
