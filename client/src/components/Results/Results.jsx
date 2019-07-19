import "./style.css";
import Books from "../Books/Books"
import React, { Component } from "react";
import API from "../../utils/API";



class Result extends Component {
    state = {
        books: []
    };

    
    componentDidMount(){
        this.loadBooks();
    };

    object(books){
        const book = Object.keys(books)
    }

    loadBooks = () =>{
    API.getBooks()
    // console.log(res)
    // .then(res => this.setState({books: res.data}))
    .then(res => this.setState({books: res.data}))
    // .then(res => (console.log(res.data)))
    .catch(err => console.log(err))
    };
    render () {
        console.log(this.state.books)
    return (
                <div className="container">
        <div className="result-panel">
            <div className="panel-body">
            Results:
            </div>
            {/* <Books book={this.state.books} /> */}
        </div>
        </div>

    )};

};





// function Result () {
//     return (
//         <div className="container">
//         <div className="result-panel">
//             <div className="panel-body">
//             Results:
//             </div>
//             <Books book={"test"} />
//         </div>
//         </div>
//     );
// }


export default Result