import React, { Component } from 'react'
import "./body.css";

export default class Body extends Component {
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
                                        <input type="text" className="form-control mb-2 search-input" placeholder="American Gods by Neil Gaiman" />
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-success mb-2">Search</button>
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

