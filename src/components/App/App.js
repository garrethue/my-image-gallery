import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList";

class App extends Component {
  state = {
    imageItems: [],
  };

  componentDidMount = () => {
    this.getData();
  }; //get data on initial load

  getData = () => {
    axios.get("/gallery/").then((res) => {
      const allImageItems = res.data;
      this.setState({ imageItems: allImageItems });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList imageItems={this.state.imageItems} />
      </div>
    );
  }
}

export default App;
