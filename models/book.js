const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooks = new Schema({
  title: String,
  authors: Array,
  description: String,
//   date: { type: Date, default: Date.now },
  imageLinks: Array,
  infoLink: String
},
{typeKey: '$type'}
);

const Book = mongoose.model("books", googleBooks);

module.exports = Book;