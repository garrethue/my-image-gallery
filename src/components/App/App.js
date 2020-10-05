import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList";
import InputForm from "../InputForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "../Nav";

class App extends Component {
  state = {
    imageItems: [],
  };

  componentDidMount = () => {
    this.getData();
  }; //get data on initial load

  getData = () => {
    axios
      .get("/gallery/")
      .then((res) => {
        const allImageItems = res.data;
        this.setState({ imageItems: allImageItems });
      })
      .catch((err) => console.log(err));
  };

  //pass in the item id and its current number of likes, once the server does logic, update the state by calling getData()
  updateLike = (id, numLikes) => {
    axios
      .put(`/gallery/like/${id}`, {
        likes: numLikes,
      })
      .then(() => this.getData())
      .catch((error) => console.log(error));
  };

  deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete(`/gallery/delete-an-item/${id}`)
        .then(() => this.getData())
        .catch((error) => console.log(error));
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <Nav />
        </div>
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <hr />
        <InputForm getData={this.getData} />
        <GalleryList
          updateLike={this.updateLike}
          imageItems={this.state.imageItems}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
