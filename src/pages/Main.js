import React from 'react'
import BookShelf from '../Components/BookShelf'
import {Link} from "react-router-dom"
export default function Main() {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title="Currently Reading"/>
                    <BookShelf title="Want To Read" />
                    <BookShelf title="Read" />
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
