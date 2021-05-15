import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "../Components/Book";
import * as BooksAPI from "../BooksAPI";
import SearchItems from "../Components/searchItems";
const SEARCH_TERMS = [
  "Android",
  "Art",
  "Artificial Intelligence",
  "Astronomy",
  "Austen",
  "Baseball",
  "Basketball",
  "Bhagat",
  "Biography",
  "Brief",
  "Business",
  "Camus",
  "Cervantes",
  "Christie",
  "Classics",
  "Comics",
  "Cook",
  "Cricket",
  "Cycling",
  "Desai",
  "Design",
  "Development",
  "Digital Marketing",
  "Drama",
  "Drawing",
  "Dumas",
  "Education",
  "Everything",
  "Fantasy",
  "Film",
  "Finance",
  "First",
  "Fitness",
  "Football",
  "Future",
  "Games",
  "Gandhi",
  "Homer",
  "Horror",
  "Hugo",
  "Ibsen",
  "Journey",
  "Kafka",
  "King",
  "Lahiri",
  "Larsson",
  "Learn",
  "Literary Fiction",
  "Make",
  "Manage",
  "Marquez",
  "Money",
  "Mystery",
  "Negotiate",
  "Painting",
  "Philosophy",
  "Photography",
  "Poetry",
  "Production",
  "Programming",
  "React",
  "Redux",
  "River",
  "Robotics",
  "Rowling",
  "Satire",
  "Science Fiction",
  "Shakespeare",
  "Singh",
  "Swimming",
  "Tale",
  "Thrun",
  "Time",
  "Tolstoy",
  "Travel",
  "Ultimate",
  "Virtual Reality",
  "Web Development",
  "iOS",
];
class Search extends Component {
  state = {
    userQuery: "",
    found: [],
    err: false,
  };

  find = (event) => {
    const userQuery = event.target.value;
    this.setState({ userQuery });
    userQuery
      ? (() => {
          BooksAPI.search(userQuery.trim()).then((results) => {
            if (results.length > 0)
              this.setState({ found: results, err: false });
            else this.setState({ found: [], err: true });
          });
        })()
      : this.setState({ found: [], err: false });
  };

  render() {
    const books = this.props.books;
    const getShelf = (book) => {
      let s = "none";
      books.forEach((b) => {
        if (b.id === book.id) {
          s = b.shelf;
        }
      });
      return s;
    };
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.userQuery}
              onChange={this.find}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.found.length > 0 && (
            <div>
              <ol className="books-grid">
                {this.state.found.map((book) => (
                  <Book
                    book={book}
                    shelf={getShelf(book)}
                    onShelfChange={this.props.handleShelfChange}
                    key={book.id}
                  />
                ))}
              </ol>
            </div>
          )}
          {this.state.err && (
            <h3>
              {this.state.userQuery} is not found, Check out search items.
              <SearchItems terms={SEARCH_TERMS} />
            </h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
Search.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};
