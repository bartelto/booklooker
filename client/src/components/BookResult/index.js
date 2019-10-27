import React from "react";
import "./style.css";

function BookResult({ key, title, author, description, image, link, buttonText, saveBook }) {
  return (
    <div className="book-result" key={key}>
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <img className="image" src={image} alt="book image" />
      <p className="description">{description}</p>
      <div className="btn-panel">
        <a className="link btn btn-primary" href={link} target="_blank">View</a>
        <span className="save-btn btn btn-primary" onClick={() => saveBook(title, author, description, image, link)}>{buttonText}</span>
      </div>
    </div>
  );
}

export default BookResult;
