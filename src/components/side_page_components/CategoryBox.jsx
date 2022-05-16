import React from "react";
import styled from "styled-components";
import {
  BlogHeader,
  BlogHeaderWrapper,
  BlogHeaderDevider,
} from "../../pages/MainBlog/BlogContent";
import "../../styles/blog_section.css";

const SearchBox = styled.input`
  width: 100%;
  height: 1.5em;
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: inherit;
  padding: 20px 15px;
  font-size: 18px;
  box-sizing: border-box;
`;

function CategoryBox() {
  return (
    <div id="categories-box" className="box">
      <BlogHeaderWrapper>
        <BlogHeader>Categories</BlogHeader>
        <BlogHeaderDevider box />
        <SearchBox />
      </BlogHeaderWrapper>
    </div>
  );
}

export default CategoryBox;
