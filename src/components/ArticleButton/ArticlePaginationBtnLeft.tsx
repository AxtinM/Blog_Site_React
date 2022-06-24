import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";
import { ArticleButtonDiv } from "./ArticlePaginationBtnElements";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

function ArticlePaginationBtnLeft({ onClick }) {
  return (
    <ArticleButtonDiv onClick={onClick}>
      <ArrowLeftTwoToneIcon />
      older posts
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtnLeft;
