import React from "react";
import "./style.css";
import Books from "../Books/Books"


function Result () {
    return (
        <div className="container">
        <div className="result-panel">
            <div className="panel-body">
            Results:
            </div>
            <Books />
        </div>
        </div>
    );
}


export default Result