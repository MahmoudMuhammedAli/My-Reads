import React from "react";
import { Link } from "react-router-dom";

export default function Lost() {
  return (
    <div className="lost-container">
      <div className="lost">
        <h1>404</h1>
        <p>You're lost!</p>
        <Link to="/">
          <button>Back to Main</button>
        </Link>
      </div>
    </div>
  );
}
