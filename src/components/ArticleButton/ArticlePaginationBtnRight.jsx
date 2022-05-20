import React from "react";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";
import {
  ArticleButtonDiv,
  ArticleLinkTag,
} from "./ArticlePaginationBtnElements";

function ArticlePaginationBtnRight() {
  return (
    <ArticleButtonDiv>
      <ArticleLinkTag href="#">Newer posts</ArticleLinkTag>
      <ArrowRightTwoToneIcon />
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtnRight;
