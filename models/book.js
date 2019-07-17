const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooks = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
//   date: { type: Date, default: Date.now },
  img: String,
  link: String
});

const Book = mongoose.model("books", googleBooks);

module.exports = Book;