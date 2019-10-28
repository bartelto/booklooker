import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the Google Books API for
export default {
  // Searches Google Books via API
  searchBooks: function (query) {
    return axios.get("/api/search", { params: { q: query } });
  },
  // Gets all books in local database
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    //console.log("saveBook function");
    //console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
