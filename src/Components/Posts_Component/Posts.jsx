import React, { Component } from "react";
import axios from "axios";
import "./posts.css";
import PostTemplet from "../PostTemplet_Component/PostTemplet.jsx";
export default class extends Component {
  state = {
    posts: [],
  };
  // componentDidMount /*hook */() {
  //   console.log("Posts mounted");
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     this.setState({
  //       posts: res.data.slice(0, 10),
  //     });
  //   });
  //   // axios
  //   //   .post("https://jsonplaceholder.typicode.com/posts", {
  //   //     userId: 3,
  //   //     title:
  //   //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   //     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //   //   })
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   });

  //   // this.setState({
  //   //   posts: [
  //   //     {
  //   //       userId: 1,
  //   //       id: 1,
  //   //       title:
  //   //         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   //       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //   //     },
  //   //     {
  //   //       userId: 1,
  //   //       id: 2,
  //   //       title: "qui est esse",
  //   //       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   //     },
  //   //   ],
  //   // });
  // }

  componentDidMount /*hook */ = async () => {
    // console.log("Posts mounted");
    const posts = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data.slice(0, 10));
    this.setState({ posts });
    // console.log(this.state.posts);
    // console.log(posts);
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map((element) => {
          return (
            <PostTemplet
              key={element.id}
              id={element.id}
              title={element.title}
              body={element.body}
            ></PostTemplet>
          );
        })}
      </div>
    );
  }
}
