import React from "react";
import "./style.css";

function BookSearch(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search-field">Book Search</label>
        <input
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          type="search"
          className="form-control"
          id="search-field"
          aria-describedby="emailHelp"
          placeholder="Enter title, author, etc." />
      </div>
      <button
        onClick={props.onClick}
        type="submit"
        className="btn btn-primary">
        Search</button>
    </form>
  );
}

export default BookSearch;
