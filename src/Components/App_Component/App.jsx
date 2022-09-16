import React, { Component } from "react";
import About from "../About_Component/About.jsx";
import Posts from "../Posts_Component/Posts.jsx";
import Comments from "../Comments_Component/Comments.jsx";
import Albums from "../Albums_Component/Albums.jsx";
import Nav from "../Nav_Component/Nav.jsx";
import UniqePost from "../UniqePost_component/UniqePost.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <About></About>
        <Posts></Posts> */}

        <BrowserRouter>
          <Nav></Nav> {/*inside the BrowserRouter*/}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Posts/:id" element={<UniqePost />} />
            <Route path="/Comments" element={<Comments />} />
            <Route path="/Albums" element={<Albums />} />
            <Route path="*" element={<Posts />} />
            {/* = <Route path="" element={<Posts />} /> = <Route element={<Posts />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
