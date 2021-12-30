import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartItem({ id }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://apis-zadanie-eshop.herokuapp.com/book", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data.map((item) => item.idBook === id && setBook(item)));
  }, []);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item !== id));
  };

  return (
    <div className="col" key={toString(id)}>
      <div className="d-flex flex-row justify-content-between align-items-center border-bottom py-3">
        <div className="d-flex flex-row align-items-center">
          <Link to={`item?${id}`} className="book-img-link">
            <img className="cart-book-img" src={book.BookLink} />
          </Link>
          <div className="card-desc ps-3">
            <Link to={`item?${id}`} className="card-desc-box">
              <h5 className="book-title">{book.Title}</h5>
              <p className="book-subtitle mb-0">
                {book.AuthorName} | {book.Year}
              </p>
              <h5 className="book-price">{book.Price}€</h5>
            </Link>
          </div>
        </div>
        <div>
          <i
            className="bi-x-circle button-close"
            onClick={() => removeFromCart(id)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
