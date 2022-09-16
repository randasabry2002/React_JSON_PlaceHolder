import React, { Component } from "react";
import axios from "axios";
import "./albums.css";
export default class Albums extends Component {
  state = {
    albums: [],
  };

  componentDidMount /*hook */() {
    console.log("Albums mounted");
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      this.setState({
        albums: res.data.slice(0, 10),
      });
    });
  }

  render() {
    let { albums } = this.state;
    return (
      <div>
        {albums.map((element) => {
          return (
            <div key={element.id} className="albumdiv">
              <h3>{element.id}</h3>
              <h2>{element.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
