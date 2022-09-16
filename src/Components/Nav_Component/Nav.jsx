import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        {/* ul>(li>a)*2  ------->emmet*/}
        <ul className="links">
          <li>
            <Link to="/About" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Posts" className="link">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/Comments" className="link">
              Comments
            </Link>
          </li>
          <li>
            <Link to="/Albums" className="link">
              Albums
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
