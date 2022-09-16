import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RenderPost from "./RenderPost.jsx";

export default function UniqePost() {
  //   console.log(useParams());
  const { id } = useParams();
  const [postData, setPostData] = useState();
  // {
  // userId:null,
  // id:null,
  //   }

  //   useEffect(() => {
  //     // axios
  //     //   .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     //   .then((res) => {
  //     //     /*هنا لما عملناها كدا من غير شرط دخل في انفنتي لووب */
  //     //     console.log(res.data);
  //     //     setPostData({ postData: res.data });
  //     //     console.log(postData);
  //     //   });
  //   });

  return (
    <div>
      <h1>Post #{id}</h1>
    </div>
  );
}
