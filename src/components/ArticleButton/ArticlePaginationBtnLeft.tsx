import React from "react";
import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";
import {
  ArticleButtonDiv,
  ArticleLinkTag,
} from "./ArticlePaginationBtnElements";

function ArticlePaginationBtnLeft({ style }) {
  return (
    <ArticleButtonDiv style={style}>
      <ArrowLeftTwoToneIcon />
      <ArticleLinkTag href="#">older posts</ArticleLinkTag>
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtnLeft;
