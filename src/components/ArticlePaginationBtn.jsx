import React from "react";
import styled from "styled-components";
import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";

const ArticleButtonDiv = styled.div`
  width: 15rem;
  height: fit-content;
  border: 3px solid #fff;
  color: #fff;
  background-color: #222831;
  display: flex;
  align-items: center;
`;

const ArticleLinkTag = styled.a`
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 15px;
  box-sizing: border-box;
`;

function ArticlePaginationBtn() {
  return (
    <ArticleButtonDiv>
      <ArrowLeftTwoToneIcon />
      <ArticleLinkTag href="#">older posts</ArticleLinkTag>
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtn;
