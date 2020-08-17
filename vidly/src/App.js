import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Counters />
        <br />
        <br />
        <Movies />
      </main>
    );
  }
}

export default App;
