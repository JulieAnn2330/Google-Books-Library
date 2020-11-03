const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true,
    unique: true
  },
  pageCount: {
    type: Number,
    required: true,
    unique: false
  },
  thumbnail: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;