import React from "react";
import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";
import {
  ArticleButtonDiv,
  ArticleLinkTag,
} from "./ArticlePaginationBtnElements";

function ArticlePaginationBtnLeft() {
  return (
    <ArticleButtonDiv>
      <ArrowLeftTwoToneIcon />
      <ArticleLinkTag href="#">older posts</ArticleLinkTag>
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtnLeft;
