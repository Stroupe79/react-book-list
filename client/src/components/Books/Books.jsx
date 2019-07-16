import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";


class Books extends Component {
    state = {
        books: []
    };

    componentDidMount(){
        this.loadBooks();
    }



    loadBooks = () =>{
    API.getBooks()
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
    };

render () {
    return (
       <h1>{this.state.books}</h1>
    )
}

}



export default Books