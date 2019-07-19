import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";



function Books(props){
    return (
        <div className="container book-panel">
            <div className="row">
        <li className="col-6"><strong>{props.title}</strong></li>
        <li className="col-6 pb-2"><strong>{props.authors}</strong></li>
        </div>
        <div className="row">
        <img className="p-3 col-2" src={props.image}/>
        <div className="col-3"></div>
        <p className="col-6">{props.desc}</p>
        </div>
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