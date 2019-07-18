import axios from "axios";

var i = 0;
var rows = 20;
const saveMe = []


export default {
  // Gets all books
  searchBooks: function(query){
    console.log(query)
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&maxResults=10')
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
    console.log(bookData.data);
    const data = bookData.data.items
    // data.forEach(function(data){
      // })
      for (i = 0; i < data.length; i++){
      saveMe.push(data[i].volumeInfo)
      console.log(saveMe)
    }
    axios.post("/api/books/", saveMe)
}


};
