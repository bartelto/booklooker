import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import BookResult from "../components/BookResult";
import DeleteBtn from "../components/DeleteBtn";
import Nav from "../components/Nav";
import API from "../utils/API";

class Search extends Component {
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

    handleSaveButton = (title, authors, description, image, link) => {
        console.log("save button clicked: " + title);
        API.saveBook({
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // delete this function!
    deleteBook = (id, author, description, image, link) => {
        console.log("delete book " + id + ": " + description);
        /*API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));*/
    };

    render() {
        return (
            <div>
                <Nav activePage="search" />
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
                                <div>
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
                                        saveBook={event => this.handleSaveButton(
                                            book.volumeInfo.title,
                                            book.volumeInfo.authors !== undefined
                                                ? book.volumeInfo.authors
                                                : [ "No author given" ],
                                            book.volumeInfo.description,
                                            book.volumeInfo.imageLinks !== undefined
                                                ? book.volumeInfo.imageLinks.smallThumbnail
                                                : "https://via.placeholder.com/100x150?text=COVER+NOT+AVALABLE",
                                            book.volumeInfo.infoLink
                                        )}
                                    />
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Search;