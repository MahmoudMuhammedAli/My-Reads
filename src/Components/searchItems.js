import React from "react";

export default function SearchItems(props) {

  return (
    <div>
      <p>{props.terms.join(", ")}</p>
    </div>
  );
}
