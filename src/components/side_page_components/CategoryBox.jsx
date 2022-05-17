import React from "react";
import styled from "styled-components";
import {
  BlogHeader,
  BlogHeaderWrapper,
  BlogHeaderDevider,
} from "../../pages/MainBlog/BlogContent";
import "../../styles/blog_section.css";

const DropDownButton = styled.button`
  background-color: #fff;
  color: #222831;
  padding: 16px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align; center;
  box-sizing: border-box;
  &:hover{
    background-color: #222831;
    color: #fff;
    border: 2px solid #fff;

  }
  `;
const DropDownElements = styled.div`
  max-height: 8em;
  width: 100%;
  display: none;
  background-color: #222831;
  color: #fff;
  padding: 10px 5px;
  box-sizing: border-box;
  margin: 3px 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const DropDownWrapper = styled.div`
  position: relative;
  display: initial-block;
  &:hover {
    &{DropDownButton} .elements {
        display: block;
    }
  }
`;

const DropDownElement = styled.a`
  display: block;
  background-color: #edededed;
  color: #222831;
  width: 100%;
  padding: 5px 5px;
  font-size: 18px;
  margin: 4px 0;
  box-sizing: border-box;
  &:hover {
    background-color: #fff;
  }
`;

function CategoryBox() {
  return (
    <div id="categories-box" className="box">
      <BlogHeaderWrapper>
        <BlogHeader>Categories</BlogHeader>
        <BlogHeaderDevider box />
        <DropDownWrapper>
          <DropDownButton>Category List</DropDownButton>
          <DropDownElements className="elements">
            <DropDownElement href="#">Element 1</DropDownElement>
            <DropDownElement href="#">Element 2</DropDownElement>
            <DropDownElement href="#">Element 3</DropDownElement>
            <DropDownElement href="#">Element 4</DropDownElement>
            <DropDownElement href="#">Element 2</DropDownElement>
            <DropDownElement href="#">Element 3</DropDownElement>
            <DropDownElement href="#">Element 4</DropDownElement>
            <DropDownElement href="#">Element 2</DropDownElement>
            <DropDownElement href="#">Element 3</DropDownElement>
            <DropDownElement href="#">Element 4</DropDownElement>
            <DropDownElement href="#">Element 2</DropDownElement>
            <DropDownElement href="#">Element 3</DropDownElement>
            <DropDownElement href="#">Element 4</DropDownElement>
          </DropDownElements>
        </DropDownWrapper>
      </BlogHeaderWrapper>
    </div>
  );
}

export default CategoryBox;
