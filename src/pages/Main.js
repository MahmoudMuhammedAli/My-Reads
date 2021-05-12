import React from "react";
import BookShelf from "../Components/BookShelf";
import { Link } from "react-router-dom";
export default function Main(props) {
  console.log(props.books);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            value="currentlyReading"
            onShelfChange={props.onShelfChange}
            books={props.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
          />
          <BookShelf
            title="Want To Read"
            value="wantToRead"
            onShelfChange={props.onShelfChange}
            books={props.books.filter((book) => book.shelf === "wantToRead")}
          />
          <BookShelf
            title="Read"
            value="read"
            onShelfChange={props.onShelfChange}
            books={props.books.filter((book) => book.shelf === "read")}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}
