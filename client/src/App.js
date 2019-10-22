import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import {Container, Row, Col} from "./components/Grid";
import BookSearch from "./components/BookSearch";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <BookSearch />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
