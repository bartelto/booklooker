const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.get("/search", (req, res) => {
  //console.log(req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/books"
router.route("api/books") // not sure this is right
  .get(booksController.findAll)
  .post(booksController.create);

module.exports = router;
  