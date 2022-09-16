import React, { Component } from "react";
import "./about.css";
export default class About extends Component {
  componentDidMount /*hook */() {
    console.log("abount mounted");
  }
  render() {
    return (
      <div className="aboutdiv">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          sunt. Temporibus alias excepturi fugiat! Quasi, modi sint quos
          tenetur, exercitationem ex omnis architecto, autem aspernatur
          perspiciatis pariatur dolor nemo culpa?
        </p>
      </div>
    );
  }
}
