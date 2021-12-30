import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { OrdersContext } from "../context/OrdersContext";
import { AuthContext } from "../context/AuthContext";
// import "./App.css";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { orders, setOrders } = useContext(OrdersContext);
  const { loggedUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://apis-zadanie-eshop.herokuapp.com/book", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  const navigate = useNavigate();

  const countPrice = () => {
    let sumPrice = 0;
    for (let id = 0; id < cartItems.length; id++) {
      for (let book = 0; book < books.length; book++) {
        if (cartItems[id] === books[book].idBook) {
          sumPrice += parseFloat(books[book].Price);
          sumPrice.toFixed(2);
        }
      }
    }
    return sumPrice;
  };
  const placeOrder = () => {
    const price = countPrice();

    // const response = fetch("https://apis-zadanie-eshop.herokuapp.com/order", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     idCustomer: 1,
    //     OrderDate: toString(new Date().getTime()),
    //     Price: price,
    //   }),
    // })
    //   .then(setCartItems([]))
    //   .then(navigate("/"));
    // console.log(response);
    console.log("Orders", orders);
    const newOrder = {
      idCustomer: loggedUser,
      idOrder: orders[orders.length - 1].idOrder + 1,
      OrderDate: "1640892420",
      // Price: price,
      OrderItems: orders.length,
    };
    setOrders(orders.push(newOrder));
    setCartItems([]);
    navigate("/");
  };

  return (
    <div>
      <div className="d-flex flex-row justify-content-between align-items-end mb-3">
        <h2 className="mb-0">Cart</h2>
        <Link to={"/"}>continue shopping</Link>
      </div>
      {cartItems.map((cartItem) => (
        <CartItem id={cartItem} />
      ))}
      {cartItems.length > 0 && (
        <div className="d-flex justify-content-center mt-3">
          <Button onClick={() => placeOrder()}>Place Order</Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
