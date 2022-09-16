import React, { Component } from "react";
import axios from "axios";
import "./comments.css";
export default class Comments extends Component {
  state = {
    comments: [],
  };

  componentDidMount /*hook */() {
    console.log("Comments mounted");
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      this.setState({
        comments: res.data.slice(0, 10),
      });
    });
  }

  render() {
    let { comments } = this.state;
    return (
      <div>
        {comments.map((element) => {
          return (
            <div key={element.id} className="commentdiv">
              <h3>{element.id}</h3>
              <h2>{element.name}</h2>
              <h2>{element.email}</h2>
              <p>{element.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
