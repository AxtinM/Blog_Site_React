import React from "react";
import ProfileImage from "../static/images/me_pic3.jpg";
import "../styles/blog_section.css";

function BlogArtical() {
  return (
    <div className="blog-section">
      <div className="blog-artical">
        <img src={ProfileImage} alt="" className="blog-image" />
        <div className="blog-content">
          <h1 className="title-blog">Blog Title</h1>
          <p className="blog-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            unde rerum maiores ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogArtical;
