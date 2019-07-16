import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";


class Search extends Component {

    searchBooks(props) {
        API.searchBooks(props.searchBox)
        .then(res => API.saveBook(res))
        .catch(err => console.log(err));
    }

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
                <input type="search"></input>
                <button className="btn btn-primary">Search!</button>
            </div>
            </div>
        );
        }

}

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