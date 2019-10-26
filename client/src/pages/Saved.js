import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import BookResult from "../components/BookResult";
import Nav from "../components/Nav";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <div>
                <Nav activePage="saved" />
                <Jumbotron />
                <Container>
                    <Row>
                        <h1>Saved Books</h1>
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

export default Saved;