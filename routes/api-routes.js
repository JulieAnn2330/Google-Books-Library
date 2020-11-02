const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");
const db = require("../models");

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});

router.route("/savedBooks")
  .get(booksController.findAll)
  .post(booksController.create)

router.route("/savedBooks/:googleId")
  .delete(booksController.remove);

module.exports = router;