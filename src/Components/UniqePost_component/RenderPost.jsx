import React, { Component } from "react";

export default class RenderPost extends Component {
  state = {
    postData: {},
  };
  componentDidMount() {
    const { id } = this.props;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ postData: res.data });
      });
  }

  render() {
    const { id } = this.props;
    const { title, body } = this.props;
    return (
      <div>
        <h1>`RenderPost ${id}`</h1>
        {/* <h2></h2> */}
      </div>
    );
  }
}
