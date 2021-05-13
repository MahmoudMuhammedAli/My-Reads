import React from "react";

export default function Book({ book, shelf, onShelfChange }) {
  const { title, authors, imageLinks } = book;
  const thumbnail =
    imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : "";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${thumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={(event) => onShelfChange(book, event.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}
