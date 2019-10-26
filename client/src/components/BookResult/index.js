import React from "react";
import "./style.css";

function BookResult({ key, title, author, description, image, link, saveBook }) {
  return (
    <div className="book-result" key={key}>
      <h1 className="title">{title}</h1>
      <p className="author">{author}</p>
      <p className="description">{description}</p>
      <img className="image" src={image} alt="book image"/>
      <a className="link" href={link} target="_blank">View</a>
      <span className="save-btn" onClick={ () => saveBook(title, author, description, image, link) }>Save</span>
    </div>
  );
}

export default BookResult;
