import React from "react";
import "./style.css";

function BookSearch() {
  return (
    <form>
      <div className="form-group">
        <label for="search-field">Book Search</label>
        <input type="search" className="form-control" id="search-field" aria-describedby="emailHelp" placeholder="Enter title, author, etc." />
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default BookSearch;
