import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Lost from "./pages/Lost";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        const { books } = this.state;
        book.shelf = shelf;
        this.setState({
          books: [...books.filter((bk) => bk.id !== book.id), book],
        });
      })
      .catch((e) => console.error(e));
  };
  async componentDidMount() {
    const books = await BooksAPI.getAll().catch((e) => console.error(e));
    this.setState({
      books,
    });
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact
              path="/search"
              render={() => (
                <Search
                  books={this.state.books}
                  changeShelf={this.handleShelfChange}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  books={this.state.books}
                  onShelfChange={this.handleShelfChange}
                />
              )}
            />
            <Route exact path="/404" render={() => <Lost />} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
