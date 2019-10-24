import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";
import BookSearch from "./components/BookSearch";
import BookResult from "./components/BookResult";
import API from "./utils/API";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log("data received!");
        console.log(res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <BookSearch
                name="bookSearch"
                value={this.state.bookSearch}
                onChange={this.handleInputChange}
                onClick={this.handleFormSubmit}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <h1>Render Books Here</h1>
            <Col size="md-12">
              {this.state.books.map(book => (
                <BookResult
                  key={book.volumeInfo.id}
                  title={book.volumeInfo.title} //"Harry Potter"
                  author={book.volumeInfo.authors.join(", ")} //"J.K. Rowling"
                  description={book.volumeInfo.description} //"A book about wizards."
                  image={book.volumeInfo.imageLinks !== undefined
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : "https://via.placeholder.com/100x150?text=COVER+NOT+AVALABLE"}
                  link={book.volumeInfo.infoLink}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
