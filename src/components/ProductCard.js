import "bootstrap-icons/font/bootstrap-icons.css";
import { Card } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartAddButton from "./CartAddButton";

function ProductCard({ product }) {
  return (
    <div className="col col-sm-6 col-xl-3" key={toString(product.idBook)}>
      <Card className="p-3">
        <Link to={`item?id=${product.idBook}`} className="book-img-link">
          <img className="book-img" src={product.BookLink} />
        </Link>
        <div className="card-desc">
          <Link to={`item?id=${product.idBook}`} className="card-desc-box">
            <h5 className="book-title">{product.Title}</h5>
            <p className="book-subtitle mb-0">
              {product.AuthorName} | {product.Year}
            </p>
            <h5 className="book-price">{product.Price}€</h5>
          </Link>
          <div>
            <CartAddButton id={product.idBook} />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
