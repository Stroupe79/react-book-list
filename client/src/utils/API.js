import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(query){
    console.log(query)
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query)
  },

  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData.data.items[0].volumeInfo)
    return axios.post("/api/books/", bookData.data.items[0].volumeInfo)
  }
};
