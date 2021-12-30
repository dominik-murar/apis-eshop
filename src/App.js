import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import ProductPage from "./screens/ProductPage";
import Cart from "./screens/Cart";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { CartContext } from "./context/CartContext";
import Login from "./screens/Login";

export const mockCustomers = [
  {
    idCustomer: 1,
    Name: "John",
    Surname: "Doe",
    City: "Kosice",
    State: "Slovakia",
    ZipCode: "04001",
  },
];

function App() {
  const { loggedUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  return (
    <Router>
      <div>
        <Navbar className="header navbar-expand-lg sticky-top">
          <Container className="header-container">
            <Link to="/" className="logo">
              <NavbarBrand>.your bookshop</NavbarBrand>
            </Link>

            {loggedUser ? (
              <div>
                <Link to="/cart" className="link-no-style ms-3">
                  {cartItems.length}
                  <i className="navbar-icon bi-cart"></i>
                </Link>
                <Link to="/profile" className="link-no-style ms-3">
                  <i className="navbar-icon bi-person-circle"></i>
                </Link>
              </div>
            ) : (
              <i className="navbar-icon bi-person-circle"></i>
            )}
          </Container>
        </Navbar>
        <Container className="overflow-hidden py-4">
          {loggedUser ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/item" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          ) : (
            <Login />
          )}
        </Container>
      </div>
    </Router>
  );
}

export default App;
