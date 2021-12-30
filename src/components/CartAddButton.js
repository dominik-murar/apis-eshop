import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function CartAddButton({ id }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [cartState, setCartState] = useState(
    cartItems.includes(id) ? "bi-cart-check-fill" : "bi-cart-plus"
  );

  const addToCart = (id) => {
    setCartItems([...cartItems, id]);
    setCartState("bi-cart-check-fill");
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item !== id));
    setCartState("bi-cart-plus");
  };

  return (
    <i
      className={`icon ${cartState}`}
      onMouseEnter={
        cartState !== "bi-cart-check-fill"
          ? () => setCartState("bi-cart-plus-fill")
          : () => null
      }
      onMouseLeave={
        cartState !== "bi-cart-check-fill"
          ? () => setCartState("bi-cart-plus")
          : () => null
      }
      onClick={
        cartState === "bi-cart-check-fill"
          ? () => removeFromCart(id)
          : () => addToCart(id)
      }
    ></i>
  );
}

export default CartAddButton;
