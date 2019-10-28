import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookResult from "../components/BookResult";
import Nav from "../components/Nav";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteBook = (id) => {
        //console.log("delete book " + id);
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Nav activePage="saved" />
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>Saved Books</h1>
                            {this.state.books.map(book => (
                                <BookResult
                                    key={book._id}
                                    title={book.title}
                                    author={book.authors !== undefined
                                        ? book.authors.join(", ")
                                        : "No author given"}
                                    description={book.description}
                                    image={book.image !== undefined
                                        ? book.image
                                        : "https://via.placeholder.com/100x150?text=COVER+NOT+AVALABLE"}
                                    link={book.link}
                                    buttonIcon={"fas fa-trash-alt"}
                                    saveBook={() => this.deleteBook(book._id)}
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