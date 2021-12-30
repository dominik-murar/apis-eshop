import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MockData } from "./Home";
import CartAddButton from "../components/CartAddButton";
// import "./App.css";

function ProductPage() {
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));

  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://apis-zadanie-eshop.herokuapp.com/book", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data.map((item) => item.idBook === id && setBook(item)));
  }, []);

  return (
    <Row>
      <div className="col col-sm-6 col-xl-4">
        <img className="book-img-big" src={book.BookLink} />
      </div>
      <div className="col col-sm-6 col-xl-8">
        <h2>{book.Title}</h2>
        <h5>
          {book.AuthorName} | {book.Year}
        </h5>
        <p>{book.BookDesc}</p>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h5 className="book-price">{book.Price}</h5>
          <CartAddButton id={id} />
        </div>
      </div>
    </Row>
  );
}

export default ProductPage;
