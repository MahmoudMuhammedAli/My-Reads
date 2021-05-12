import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './pages/Main'
import Search from './pages/Search'
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
          
            <Route exact path="/search" render={() => (<Search />)} />
            <Route exact path="/" render={() => (<Main />)}/>
            
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
