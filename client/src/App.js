import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Nav/Navbar'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Result from './components/Results/Results'
import Book from './components/Books/Books'


class App extends Component {
state = {
  books: []
}

  render() {
    return (
      <div className="App">
       <Navbar />
       <Header />
       <Search  />
       <div className="resultBox">
       <Result>
       <Book book={this.state.books.map(book =>(
         <p>{book.title}</p>
       ))}/>
       </ Result>
       </div>
      </div>
    );
  }
}

export default App;
