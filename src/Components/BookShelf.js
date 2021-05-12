import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

export default function BookShelf({ title, books, value, onShelfChange }) {
  console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book shelf={value} book={book} onShelfChange={onShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};
