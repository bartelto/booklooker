const axios = require("axios");
const router = require("express").Router();

router.get("/search", (req, res) => {
  //console.log(req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
