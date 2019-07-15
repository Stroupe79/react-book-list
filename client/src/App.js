import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Nav/Navbar'
import Header from './components/Header/Header'
import Search from './components/Search/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Header />
       <Search searchBox="" />
      </div>
    );
  }
}

export default App;
