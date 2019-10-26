import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import BookResult from "../components/BookResult";
import Nav from "../components/Nav";
import API from "../utils/API";

class Saved extends Component {

    render() {
        return (
            <div>
                <Nav activePage="saved" />
                <Jumbotron />
                {"saved"}
            </div >
        );
    }
}

export default Saved;