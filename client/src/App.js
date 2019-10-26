import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import BookSearch from "./components/BookSearch";
import BookResult from "./components/BookResult";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";

import API from "./utils/API";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


/*
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
    API.searchBooks(this.state.bookSearch)
      .then(res => {
        console.log("data received!");
        console.log(res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  handleSaveButton = (title, author, description, image, link) => {
    console.log("save button clicked: " + title);
    API.saveBook({
      title: title,
      author: author,
      description: description,
      image: image,
      link: link
    })
      .then(res => console.log(res))
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
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors !== undefined
                    ? book.volumeInfo.authors.join(", ")
                    : "No author given"}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks !== undefined
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : "https://via.placeholder.com/100x150?text=COVER+NOT+AVALABLE"}
                  link={book.volumeInfo.infoLink}
                  saveBook={event => this.handleSaveButton}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
*/
export default App;
