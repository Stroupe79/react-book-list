import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Search extends Component {

    state= {
        query: ""
    };
    
    
    // searchBooks(props) {
        //     API.searchBooks(props.searchBox)
        //     .then(res => API.saveBook(res))
        //     .catch(err => console.log(err));
        // };
        
        handleFormSubmit = event => {
        // console.log(this.state.name)
        event.preventDefault(this.state.name);
          API.searchBooks(this.state.name)
            .then(res => API.saveBook(res))
            .catch(err => console.log(err));
        };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          name: value
        });
        // console.log(this.state.name)
      };

    // saveBook() {
    //     API.saveBook
    // }

    render () {
        return (
            <div className="container">
            <div className="search-panel">
                <div className="panel-body">
                Type a book title or author to search!
                </div>
                <input onChange={this.handleInputChange} type="search"></input>
                <button onClick={this.handleFormSubmit}  className="btn btn-primary">Search!</button>
            </div>
            </div>
        );
        }
    };

// function Search () {
//     return (
//         <div className="container">
//         <div className="search-panel">
//             <div className="panel-body">
//             Type a book title or author to search!
//             </div>
//             <input type="search"></input>
//             <button className="btn btn-primary">Search!</button>
//         </div>
//         </div>
//     );
// }

export default Search