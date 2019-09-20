import React, { Component } from 'react'
import "./body.css";
import axios from "axios";


export default class Body extends Component {
    
    state = {
        title: "",
        booksArray: []
    };
    
    bookSearch =(event)=> {
        let self=this
        event.preventDefault();
        let bookSearch = document.getElementById("search-input").value;
        console.log(bookSearch);
        let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`;
        let bookArray =this.state.booksArray;
        axios.get(queryUrl).then(
            function(response) {
                for (let i = 0; i <= 9; i++) {
                    let data = response.data.items[i].volumeInfo;
                    bookArray.push(data);
                }
                self.setState({bookArray});
    })
    .catch(function(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error);
        }
        console.log(error.config);
    });
    
}


    handleChange =(event)=> {
        let oldState = this.state;
        oldState.title = event.target.value;
        this.setState(oldState);
    }
    
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div className="search">
                            <form>
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <label className="sr-only" for="inlineFormInput">Book</label>
                                        <input id="search-input" type="text" className="form-control mb-2 search-input" value= {this.state.title} onChange={this.handleChange} placeholder="American Gods by Neil Gaiman" />
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-success mb-2" onClick={this.bookSearch}>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br></br>
                        <div className="card">
                            <h5 className="card-header">Book</h5>
                            <div className="card-body">
                                <p className="card-text">Summary</p>
                                <a href="#" className="btn btn-success">Save to Favorites</a>
                            </div>
                        </div>
                        <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                    </div>

                </div>
            </div>
        )
    }
}

