import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import BookResult from "../components/BookResult";
import Nav from "../components/Nav";
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        bookSearch: "",
        searchMessage: ""
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
                //console.log("data received!");
                //console.log(res.data);
                this.setState({
                    books: res.data,
                    searchMessage: (res.data.length === 0
                        ? "No results."
                        : res.data.length + " results:")
                });
            })
            .catch(err => {
                this.setState({ searchMessage: "No results." });
                console.log(err);
            });
    };

    handleSaveButton = (googleId, title, authors, description, image, link) => {
        API.saveBook({
            googleId: googleId,
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
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
                        <Col size="md-12">
                            <h1>{this.state.searchMessage}</h1>
                            {this.state.books.length === 0 ? "" :
                                this.state.books.map(book => (
                                    <BookResult
                                        key={book.id}
                                        title={book.volumeInfo.title}
                                        author={book.volumeInfo.authors !== undefined
                                            ? book.volumeInfo.authors.join(", ")
                                            : "No author given"}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks !== undefined
                                            ? book.volumeInfo.imageLinks.smallThumbnail
                                            : "https://via.placeholder.com/100x150?text=COVER+NOT+AVALABLE"}
                                        link={book.volumeInfo.infoLink}
                                        buttonIcon={"fas fa-bookmark"}
                                        saveBook={event => this.handleSaveButton(
                                            book.id,
                                            book.volumeInfo.title,
                                            book.volumeInfo.authors !== undefined
                                                ? book.volumeInfo.authors
                                                : ["No author given"],
                                            book.volumeInfo.description,
                                            book.volumeInfo.imageLinks !== undefined
                                                ? book.volumeInfo.imageLinks.smallThumbnail
                                                : "https://via.placeholder.com/100x150?text=COVER+NOT+AVALABLE",
                                            book.volumeInfo.infoLink
                                        )}
                                    />
                                ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Search;