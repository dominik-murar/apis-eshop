import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
// import "./App.css";

export const MockData = [
  {
    id: 1,
    author: "Author 1",
    title: "Book Title 1",
    year: "2020",
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/51kRgh8pI-L._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    author: "Author 2",
    title: "Book Title 2",
    year: "2020",
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/51kRgh8pI-L._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    author: "Author 3",
    title: "Book Title 3",
    year: "2020",
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/51kRgh8pI-L._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    author: "Author 4",
    title: "Book Title 4",
    year: "2020",
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/51kRgh8pI-L._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 5,
    author: "Author 5",
    title: "Book Title 5",
    year: "2020",
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/51kRgh8pI-L._SX329_BO1,204,203,200_.jpg",
  },
];

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://apis-zadanie-eshop.herokuapp.com/book", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <Row className="g-3">
        {books.map((book) => (
          <ProductCard product={book} />
        ))}
      </Row>
    </div>
  );
}

export default Home;
