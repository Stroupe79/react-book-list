import React from "react";
import "./style.css";


function Search () {
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


export default Search