import React from "react";
import "./style.css";

function BookResult({ title, author, description, image, link }) {
  return (
    <div className="book-result">
      <h1 className="title">{title}</h1>
      <p className="author">{author}</p>
      <p className="description">{description}</p>
      <img className="image" src={image} alt="book image"/>
      <a className="link" href={link} target="_blank">View</a>
      
    </div>
  );
}

// <span className="save-btn" onClick={ saveBook(title, author, description, image, link) }>Save</span>

export default BookResult;
