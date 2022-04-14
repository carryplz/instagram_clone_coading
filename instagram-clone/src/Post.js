import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <h3>UserName</h3>
      <img
        className="post__image"
        src="http://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg"
        alt=""
      />
      <h4 className="post__text">
        <strong>Ditei</strong>caption
      </h4>
    </div>
  );
}

export default Post;
