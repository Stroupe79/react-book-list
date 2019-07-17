const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooks = new Schema({
  title: { type: String},
  authors: { type: String},
  description: String,
//   date: { type: Date, default: Date.now },
  imageLinks: String,
  infoLink: String
});

const Book = mongoose.model("books", googleBooks);

module.exports = Book;