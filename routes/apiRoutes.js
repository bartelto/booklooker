const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");

// Matches with "/api/search"
router.get("/search", (req, res) => {
  //console.log(req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/books"
router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("books/:id")
  .delete(booksController.remove);

module.exports = router;
  