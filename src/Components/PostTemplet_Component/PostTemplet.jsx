import React, { Component } from "react";
import "../Posts_Component/posts.css";
import { Link } from "react-router-dom";
export default class PostTemplet extends Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <div className="psotdiv">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link className="viwe_btn" to={`/Posts/${id}`}>
          viwe the post
        </Link>
      </div>
    );
  }
}
