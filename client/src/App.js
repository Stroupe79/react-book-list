import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Nav/Navbar'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Result from './components/Results/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Header />
       <Search searchBox="" />
       <div className="resultBox">
       <Result />
       </div>
      </div>
    );
  }
}

export default App;
