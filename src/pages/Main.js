import React from 'react'
import BookShelf from '../Components/BookShelf'
import {Link} from "react-router-dom"
export default function Main(props) {
    console.log(props.books);
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title="Currently Reading" value="current" books={props.books.filter((book) => book.shelf === "current")}/>
                    <BookShelf title="Want To Read" value="want" books={props.books.filter((book) => book.shelf === "want")}/>
                    <BookShelf title="Read" value="read" books={props.books.filter((book) => book.shelf === "read")}/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}
