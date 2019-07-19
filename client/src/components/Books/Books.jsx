import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";



function Books(props){
    return (
        <div className="container book-panel">
        <li className="row col-6"><strong>{props.title}</strong></li>
        <li className="col-6"><strong>{props.authors}</strong></li>
        <img className="row p-3" src={props.image}/>
        </div>
    )
}

// class Books extends Component {
//     state = {
//         books: []
//     };

    
//     componentDidMount(){
//         this.loadBooks();
//     };



//     loadBooks = () =>{
//     API.getBooks()
//     // console.log(res)
//     .then(res => this.setState({books: res.data}))
//     // .then(res => this.setState({books: res.data}))
//     // .then(res => (console.log(res.data)))
//     .catch(err => console.log(err))
//     };

// render (props) {
//     return (
// <div>{props.book}
// </div>    )
// };

// };

export default Books