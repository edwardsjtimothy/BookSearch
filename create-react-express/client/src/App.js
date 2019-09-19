import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Body />
      </div>
    );
  }
}

export default App;
